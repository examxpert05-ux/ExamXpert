import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page or try again later.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn"
            style={{ marginTop: 16 }}
          >
            Refresh Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}