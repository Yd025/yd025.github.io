const logoModules = import.meta.glob<{ default: string }>(
  '../assets/logos/*.{png,jpg,jpeg,svg,webp}',
  { eager: true }
);

const logoMap: Record<string, string> = {};
for (const [path, mod] of Object.entries(logoModules)) {
  const filename = path.split('/').pop()!;
  logoMap[filename] = mod.default;
}

export function resolveLogo(filename: string | undefined): string | undefined {
  if (!filename) return undefined;
  return logoMap[filename];
}
