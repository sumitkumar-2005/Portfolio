interface TransitionLayerProps {
  children: React.ReactNode;
}

// Simplified to avoid any transition overlay that could appear as a stuck loading state.
export default function TransitionLayer({ children }: TransitionLayerProps) {
  return <div className="flex-1 flex flex-col">{children}</div>;
}
