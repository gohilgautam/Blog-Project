export const ErrorAlert = ({ message }:{ message: string }) => (
  <div className="flex items-center justify-center gap-1">
    <span className="font-medium mr-1 text-sm">{message}</span>
    <div className="flex space-x-1">
      <div className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]"></div>
    </div>
  </div>
);