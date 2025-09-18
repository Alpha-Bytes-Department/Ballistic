import React, { useState, useCallback } from 'react';

// Custom hook for managing alerts
export const useAlert = () => {
  const [alerts, setAlerts] = useState([]);

  const showAlert = useCallback((type, message, options = {}) => {
    const id = Date.now() + Math.random();
    const alert = {
      id,
      type,
      message,
      title: options.title,
      duration: options.duration ?? 2000,
      dismissible: options.dismissible ?? true,
      autoHide: options.autoHide ?? true,
      ...options
    };

    setAlerts(prev => [...prev, alert]);

    // Auto-hide functionality
    if (alert.autoHide && alert.duration > 0) {
      setTimeout(() => {
        setAlerts(prev => prev.filter(a => a.id !== id));
      }, alert.duration);
    }

    return id;
  }, []);

  const hideAlert = useCallback((id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setAlerts([]);
  }, []);

  // Convenience methods
  const showSuccess = useCallback((message, options) => 
    showAlert('success', message, options), [showAlert]);
  
  const showError = useCallback((message, options) => 
    showAlert('error', message, options), [showAlert]);
  
  const showWarning = useCallback((message, options) => 
    showAlert('warning', message, options), [showAlert]);
  
  const showInfo = useCallback((message, options) => 
    showAlert('info', message, options), [showAlert]);

  return {
    alerts,
    showAlert,
    hideAlert,
    clearAll,
    showSuccess,
    showError,
    showWarning,
    showInfo
  };
};

// Alert Component
const Alert = ({ alert, onDismiss }) => {
  const typeConfig = {
    success: {
      bg: 'bg-green-50 border-green-200',
      text: 'text-green-800',
      iconColor: 'text-green-500',
      icon: '✓'
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      text: 'text-red-800',
      iconColor: 'text-red-500',
      icon: '✕'
    },
    warning: {
      bg: 'bg-yellow-50 border-yellow-200',
      text: 'text-yellow-800',
      iconColor: 'text-yellow-500',
      icon: '⚠'
    },
    info: {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-800',
      iconColor: 'text-blue-500',
      icon: 'ℹ'
    }
  };

  const config = typeConfig[alert.type];

  return (
    <div 
      className={`
        ${config.bg} ${config.text} 
        border rounded-lg p-4 mb-3
        transition-all duration-300 ease-in-out
        animate-in slide-in-from-right-full
      `}
      role="alert"
    >
      <div className="flex items-start">
        <span className={`${config.iconColor} mr-3 mt-0.5 flex-shrink-0 text-lg font-bold`}>
          {config.icon}
        </span>
        <div className="flex-1">
          {alert.title && (
            <h3 className="font-semibold mb-1">{alert.title}</h3>
          )}
          <p className="text-sm">{alert.message}</p>
        </div>
        {alert.dismissible && (
          <button
            onClick={() => onDismiss(alert.id)}
            className={`ml-3 ${config.iconColor} hover:opacity-70 transition-opacity text-lg font-bold`}
            aria-label="Dismiss alert"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};

// Alert Container Component
export const AlertContainer = ({ alerts, onDismiss, position = 'top-right' }) => {
  const positionStyles = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  };

  if (!alerts.length) return null;

  return (
    <div className={`fixed z-50 ${positionStyles[position]} max-w-sm w-full`}>
      {alerts.map(alert => (
        <Alert key={alert.id} alert={alert} onDismiss={onDismiss} />
      ))}
    </div>
  );
};