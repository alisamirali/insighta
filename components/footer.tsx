export function Footer() {
  return (
    <footer className="w-full py-4 border-t mt-4 border-border flex items-center justify-between">
      <div className="flex items-center justify-center w-full gap-2">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Insighta. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
