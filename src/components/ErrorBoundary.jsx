import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full py-12 px-6 flex flex-col items-center justify-center text-center bg-slate-900/60 backdrop-blur-md rounded-2xl border border-red-500/20 my-6 max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold mb-4 border border-red-500/30">
            !
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">Something went wrong in this section</h3>
          <p className="text-gray-400 text-sm max-w-md mb-4">
            {this.state.error?.message || "An unexpected error occurred while rendering."}
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false, error: null })}
            className="px-4 py-2 bg-[#00BFFF]/20 hover:bg-[#00BFFF]/30 border border-[#00BFFF]/40 text-[#00BFFF] rounded-xl text-sm transition-all"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
