#!/data/data/com.termux/files/usr/bin/bash
# TMT OFFICIAL — Termux bootstrap
# Run inside Termux as the normal app user (never with sudo).
set -Eeuo pipefail

REPO_URL="https://github.com/Sidduhack/TMT-official-eSports.git"
PROJECT_DIR="${TMT_PROJECT_DIR:-$HOME/projects/tmt-official}"
START_DEV_SERVER=0
SKIP_BUILD=0

log()  { printf '\n[ TMT ] %s\n' "$*"; }
fail() { printf '\n[ ERROR ] %s\n' "$*" >&2; exit 1; }
has()  { command -v "$1" >/dev/null 2>&1; }

for arg in "$@"; do
  case "$arg" in
    --start) START_DEV_SERVER=1 ;;
    --no-build) SKIP_BUILD=1 ;;
    -h|--help)
      cat <<'HELP'
TMT OFFICIAL Termux setup

Usage:
  bash setup-termux.sh [options]

Options:
  --start      Start Vite after setup (keeps the terminal session running)
  --no-build   Skip the production build check
  -h, --help   Show this help

Optional:
  TMT_PROJECT_DIR=/path/to/project bash setup-termux.sh

Run this script inside Termux as the normal Termux user.
HELP
      exit 0
      ;;
    *) fail "Unknown option: $arg (use --help)" ;;
  esac
done

[ -n "${PREFIX:-}" ] || fail "This does not look like Termux. Open the Termux app and run the script there."
case "$PREFIX" in
  /data/data/com.termux/files/usr) ;;
  *) fail "Unexpected Termux PREFIX: $PREFIX" ;;
esac
[ "$(id -u)" -ne 0 ] || fail "Do not run Termux setup as root."

log "Updating Termux package lists and installed packages..."
pkg update -y
pkg upgrade -y

log "Installing required tools..."
pkg install -y git nodejs-lts

has git || fail "Git installation failed."
has node || fail "Node.js installation failed."
has npm || fail "npm was not found after installing nodejs-lts."

log "Checking Node.js compatibility..."
node - <<'NODE'
const [major, minor] = process.versions.node.split(".").map(Number);
const supported = major > 22 || (major === 22 && minor >= 12) ||
                  (major === 20 && minor >= 19);
if (!supported) {
  console.error("Detected Node.js " + process.versions.node);
  console.error("This project requires Node.js 20.19+ or 22.12+.");
  console.error("Update the Termux nodejs-lts package, then rerun this script.");
  process.exit(1);
}
console.log("Node.js " + process.versions.node + " is compatible.");
NODE

log "Git: $(git --version)"
log "npm: $(npm --version)"

if [ -d "$PROJECT_DIR/.git" ]; then
  log "Existing Git repository found at $PROJECT_DIR"
  CURRENT_REMOTE="$(git -C "$PROJECT_DIR" remote get-url origin 2>/dev/null || true)"
  case "$CURRENT_REMOTE" in
    "$REPO_URL"|https://github.com/Sidduhack/TMT-official-eSports)
      log "Updating existing project (fast-forward only)..."
      git -C "$PROJECT_DIR" pull --ff-only origin main
      ;;
    *)
      fail "The directory is already a different Git repository. Set TMT_PROJECT_DIR to a new path. Nothing was overwritten."
      ;;
  esac
elif [ -e "$PROJECT_DIR" ]; then
  fail "$PROJECT_DIR exists but is not a Git clone. Move it or choose another TMT_PROJECT_DIR. Nothing was overwritten."
else
  log "Cloning TMT OFFICIAL..."
  mkdir -p "$(dirname "$PROJECT_DIR")"
  git clone --branch main --single-branch "$REPO_URL" "$PROJECT_DIR"
fi

cd "$PROJECT_DIR"

[ -f package.json ] || fail "package.json is missing. The checked-out repository is not the expected project."
[ -f AGENTS.md ] || fail "AGENTS.md is missing. Stop and inspect the repository."

log "Installing project dependencies..."
npm install

log "Running TypeScript check..."
npm run typecheck

if [ "$SKIP_BUILD" -eq 0 ]; then
  log "Running production build..."
  npm run build
else
  log "Production build skipped by --no-build."
fi

log "Setup completed."
printf '\nProject directory: %s\n' "$PROJECT_DIR"
printf 'Start development server with:\n  cd "%s" && npm run dev -- --host 0.0.0.0\n' "$PROJECT_DIR"
printf 'Then open the local URL printed by Vite in your browser.\n'

if [ "$START_DEV_SERVER" -eq 1 ]; then
  log "Starting Vite development server..."
  exec npm run dev -- --host 0.0.0.0
fi
