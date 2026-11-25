// Anxiety Journal — a tiny CLI for shipping on Friday at 4:59 PM.

const line =
  'Deployed at 4:59 PM on a Friday. My monitoring dashboard is now my anxiety journal.';

function renderLine(shout: boolean): string {
  return shout ? line.toUpperCase() : line;
}

function hasFlag(flag: string): boolean {
  return process.argv.slice(2).includes(flag);
}

function showHelp(): void {
  process.stderr.write('Usage: node main.ts [--shout] [--help]\n');
}

function main(): void {
  if (hasFlag('--help')) {
    showHelp();
    process.exit(0);
  }

  console.log(renderLine(hasFlag('--shout')));
}

main();
