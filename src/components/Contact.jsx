import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import DOMPurify from "dompurify";
import { Send, Mail, MapPin, Clock, User, MessageSquare, Globe, Cpu, Wifi, WifiOff, X, CheckCircle, AlertCircle, Info, Bell, Zap, Shield, Rocket } from "lucide-react";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

// Toast Notification Component
const Toast = ({ message, type, onClose, id }) => {
  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-400" />,
    error: <AlertCircle className="w-5 h-5 text-red-400" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-400" />,
    info: <Info className="w-5 h-5 text-blue-400" />,
    loading: <div className="w-5 h-5 border-2 border-gray-400 border-t-blue-400 rounded-full animate-spin" />,
    form: <AlertCircle className="w-5 h-5 text-purple-400" />,
  };

  const colors = {
    success: "border-emerald-500/30 bg-gradient-to-r from-emerald-900/20 to-black/40",
    error: "border-red-500/30 bg-gradient-to-r from-red-900/20 to-black/40",
    warning: "border-amber-500/30 bg-gradient-to-r from-amber-900/20 to-black/40",
    info: "border-blue-500/30 bg-gradient-to-r from-blue-900/20 to-black/40",
    loading: "border-blue-500/30 bg-gradient-to-r from-blue-900/20 to-black/40",
    form: "border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-black/40",
  };

  const titles = {
    success: "SUCCESS",
    error: "ERROR",
    warning: "WARNING",
    info: "INFO",
    loading: "PROCESSING",
    form: "FORM VALIDATION",
  };

  useEffect(() => {
    if (type !== "loading") {
      const timer = setTimeout(() => {
        onClose(id);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [id, onClose, type]);

  return (
    <div className={`relative mb-3 p-4 rounded-xl border backdrop-blur-xl ${colors[type]} animate-slideIn`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {icons[type]}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
              type === "success" ? "text-emerald-400" :
              type === "error" ? "text-red-400" :
              type === "warning" ? "text-amber-400" :
              type === "loading" ? "text-blue-400" :
              type === "form" ? "text-purple-400" :
              "text-blue-400"
            }`}>
              {titles[type]}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-30" />
          </div>
          <p className="text-white text-sm font-medium">{message.title}</p>
          {message.description && (
            <p className="text-gray-400 text-xs mt-1">{message.description}</p>
          )}
          {message.errors && message.errors.length > 0 && (
            <ul className="mt-2 space-y-1">
              {message.errors.map((error, index) => (
                <li key={index} className="flex items-center gap-2 text-xs">
                  <div className="w-1 h-1 rounded-full bg-current opacity-60" />
                  <span className="text-red-300">{error}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <button
          onClick={() => onClose(id)}
          className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Progress bar for auto-dismiss */}
      {type !== "loading" && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-current to-transparent opacity-20 rounded-b-xl overflow-hidden">
          <div className="h-full bg-current animate-progress" />
        </div>
      )}
    </div>
  );
};

// Toast Container
const ToastContainer = ({ toasts, removeToast }) => {
  return (
    <div className="fixed top-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={removeToast}
        />
      ))}
    </div>
  );
};

// Inline Form Alert Component
const FormAlert = ({ type, message, field, onClose }) => {
  const alertStyles = {
    error: {
      border: "border-red-500/30",
      background: "bg-gradient-to-r from-red-900/10 to-black/30",
      text: "text-red-400",
      icon: <AlertCircle className="w-4 h-4 text-red-400" />,
    },
    warning: {
      border: "border-amber-500/30",
      background: "bg-gradient-to-r from-amber-900/10 to-black/30",
      text: "text-amber-400",
      icon: <AlertCircle className="w-4 h-4 text-amber-400" />,
    },
    info: {
      border: "border-blue-500/30",
      background: "bg-gradient-to-r from-blue-900/10 to-black/30",
      text: "text-blue-400",
      icon: <Info className="w-4 h-4 text-blue-400" />,
    },
    success: {
      border: "border-emerald-500/30",
      background: "bg-gradient-to-r from-emerald-900/10 to-black/30",
      text: "text-emerald-400",
      icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
    },
  };

  const style = alertStyles[type] || alertStyles.error;

  return (
    <div className={`mt-2 p-3 rounded-lg border ${style.border} ${style.background} animate-slideDown`}>
      <div className="flex items-start gap-2">
        <div className="flex-shrink-0 mt-0.5">
          {style.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium uppercase tracking-wider ${style.text}`}>
              {field ? `${field.toUpperCase()} FIELD` : "VALIDATION"}
            </span>
            {onClose && (
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close alert"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
          <p className="text-white text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};

// Character Counter Component
const CharacterCounter = ({ current, max, showWarning = true }) => {
  const percentage = (current / max) * 100;
  let color = "text-green-400";
  let bgColor = "bg-green-500/20";
  let borderColor = "border-green-500/30";

  if (percentage > 80) {
    color = "text-red-400";
    bgColor = "bg-red-500/20";
    borderColor = "border-red-500/30";
  } else if (percentage > 60) {
    color = "text-amber-400";
    bgColor = "bg-amber-500/20";
    borderColor = "border-amber-500/30";
  }

  return (
    <div className={`mt-2 px-3 py-2 rounded-lg border ${borderColor} ${bgColor}`}>
      <div className="flex items-center justify-between mb-1">
        <span className={`text-xs font-mono ${color}`}>
          {current}/{max} characters
        </span>
        <span className={`text-xs ${color}`}>
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-300 ${
            percentage > 80 ? "bg-gradient-to-r from-red-500 to-red-400" :
            percentage > 60 ? "bg-gradient-to-r from-amber-500 to-amber-400" :
            "bg-gradient-to-r from-green-500 to-emerald-400"
          }`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      {showWarning && current > 450 && (
        <p className="text-amber-400 text-xs mt-2 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          {current >= max ? "Character limit reached!" : "Approaching character limit"}
        </p>
      )}
    </div>
  );
};

// Submit Animation Component (Fixed)
const SubmitAnimation = ({ stage }) => {
  const stages = [
    { icon: "📧", label: "Preparing", description: "Processing your message..." },
    { icon: "⚡", label: "Encrypting", description: "Securing your data..." },
    { icon: "🚀", label: "Sending", description: "Transmitting to server..." },
    { icon: "✅", label: "Complete", description: "Message sent successfully!" },
  ];

  return (
    <div className="relative">
      {/* Transmission lines animation */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00BFFF]/10 to-transparent animate-shimmer" />
      </div>
      
      <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl p-8 border border-[#00BFFF]/30">
        <div className="flex flex-col items-center text-center">
          {/* Animated ring */}
          <div className="relative mb-6">
            <div className="w-24 h-24 rounded-full border-4 border-[#00BFFF]/20" />
            <div className="absolute inset-4 rounded-full border-4 border-[#00BFFF] animate-pulse" />
            <div className="absolute inset-8 rounded-full bg-gradient-to-r from-[#00BFFF] to-blue-500 flex items-center justify-center">
              <span className="text-2xl">{stages[stage].icon}</span>
            </div>
            
            {/* Orbiting dots */}
            <div className="absolute inset-0">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#00BFFF] rounded-full"
                  style={{
                    animation: `orbit 2s linear infinite ${i * 0.5}s`,
                    transformOrigin: "12px 12px",
                    left: "50%",
                    top: "50%",
                    marginLeft: "-1px",
                    marginTop: "-1px",
                    transform: "rotate(0deg) translate(40px) rotate(0deg)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Stage indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              {stages.map((s, index) => (
                <React.Fragment key={index}>
                  <div className={`w-3 h-3 rounded-full ${index <= stage ? "bg-[#00BFFF]" : "bg-gray-700"} transition-all duration-300`} />
                  {index < stages.length - 1 && (
                    <div className={`w-8 h-0.5 ${index < stage ? "bg-[#00BFFF]" : "bg-gray-700"} transition-all duration-300`} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-[#00BFFF] text-sm font-mono">
              STAGE {stage + 1}/{stages.length}
            </p>
          </div>

          {/* Current stage info */}
          <div className="space-y-2">
            <h3 className="text-white text-xl font-bold">{stages[stage].label}</h3>
            <p className="text-gray-400 text-sm">{stages[stage].description}</p>
          </div>

          {/* Loading dots */}
          <div className="flex gap-2 mt-6">
            <div className="w-2 h-2 bg-[#00BFFF] rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-[#00BFFF] rounded-full animate-pulse delay-150" />
            <div className="w-2 h-2 bg-[#00BFFF] rounded-full animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [errors, setErrors] = useState({});
  const [fieldFocus, setFieldFocus] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStage, setSubmitStage] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [isOnline, setIsOnline] = useState(true);
  const [csrfToken, setCsrfToken] = useState("");
  const [toasts, setToasts] = useState([]);
  const [toastCounter, setToastCounter] = useState(0);
  const [fieldValidation, setFieldValidation] = useState({});
  const [showAllErrors, setShowAllErrors] = useState(false);

  // Initialize CSRF token
  useEffect(() => {
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);
  }, []);

  // Network status detection
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      addToast({
        title: "Connection Restored",
        description: "You're back online and can send messages.",
      }, "success");
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      addToast({
        title: "Connection Lost",
        description: "Please check your internet connection.",
      }, "error");
    };
    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    
    // Set initial status
    setIsOnline(navigator.onLine);
    
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Toast functions
  const addToast = (message, type = "info") => {
    const id = toastCounter + 1;
    setToasts(prev => [...prev, { id, message, type }]);
    setToastCounter(id);
    return id;
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    const validation = { ...fieldValidation };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Name is required";
          validation.name = { type: "error", message: "Please enter your name" };
        } else if (value.trim().length < 2) {
          newErrors.name = "Name must be at least 2 characters";
          validation.name = { type: "warning", message: "Name should be at least 2 characters" };
        } else if (value.length > 50) {
          newErrors.name = "Name cannot exceed 50 characters";
          validation.name = { type: "error", message: "Name is too long" };
        } else {
          delete newErrors.name;
          validation.name = { type: "success", message: "Name looks good!" };
        }
        break;

      case "email":
        if (!value.trim()) {
          newErrors.email = "Email is required";
          validation.email = { type: "error", message: "Please enter your email address" };
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Please enter a valid email address";
          validation.email = { type: "error", message: "Please enter a valid email address" };
        } else if (value.length > 100) {
          newErrors.email = "Email cannot exceed 100 characters";
          validation.email = { type: "error", message: "Email is too long" };
        } else {
          delete newErrors.email;
          validation.email = { type: "success", message: "Valid email format" };
        }
        break;

      case "message":
        if (!value.trim()) {
          newErrors.message = "Message is required";
          validation.message = { type: "error", message: "Please enter your message" };
        } else if (value.trim().length < 10) {
          newErrors.message = "Message must be at least 10 characters";
          validation.message = { type: "warning", message: "Message should be more detailed (min. 10 characters)" };
        } else if (value.length > 500) {
          newErrors.message = "Message cannot exceed 500 characters";
          validation.message = { type: "error", message: "Message exceeds 500 character limit" };
        } else {
          delete newErrors.message;
          
          if (value.length > 400) {
            validation.message = { type: "warning", message: "Message is getting long" };
          } else if (value.length > 200) {
            validation.message = { type: "success", message: "Good message length!" };
          } else {
            validation.message = { type: "info", message: "Consider adding more details" };
          }
        }
        break;
    }

    setErrors(newErrors);
    setFieldValidation(validation);
    return !newErrors[name];
  };

  const validateForm = () => {
    let isValid = true;
    const fieldOrder = ["name", "email", "message"];
    const errorMessages = [];

    // Validate all fields
    fieldOrder.forEach(field => {
      if (!validateField(field, form[field])) {
        isValid = false;
        if (errors[field]) {
          errorMessages.push(`${field.charAt(0).toUpperCase() + field.slice(1)}: ${errors[field]}`);
        }
      }
    });

    if (!isValid) {
      addToast({
        title: "Form Validation Failed",
        description: "Please check the highlighted fields below.",
        errors: errorMessages,
      }, "form");
      
      // Highlight all invalid fields
      setShowAllErrors(true);
      
      // Auto-hide the showAllErrors flag after 5 seconds
      setTimeout(() => {
        setShowAllErrors(false);
      }, 5000);
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    
    // Update form
    setForm({
      ...form,
      [name]: value,
    });
    
    // Validate field in real-time if user has focused on it or we're showing all errors
    if (fieldFocus[name] || showAllErrors) {
      validateField(name, value);
    }
    
    // Show warning when approaching character limit
    if (name === "message" && value.length === 490) {
      addToast({
        title: "Character Limit Warning",
        description: "You're approaching the 500 character limit.",
      }, "warning");
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    setFieldFocus(prev => ({ ...prev, [name]: true }));
    
    // Validate field on focus if it has content
    if (form[name]) {
      validateField(name, form[name]);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
    setFieldValidation({});
    setFieldFocus({});
    setShowAllErrors(false);
    
    // Generate new CSRF token
    const token = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    setCsrfToken(token);
    
    addToast({
      title: "Form Cleared",
      description: "All fields have been reset.",
    }, "info");
  };

  const simulateSubmitStages = async () => {
    for (let i = 0; i < 4; i++) {
      setSubmitStage(i);
      // Simulate processing time for each stage
      await new Promise(resolve => setTimeout(resolve, i === 3 ? 1000 : 800));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if online
    if (!isOnline) {
      addToast({
        title: "Offline Detected",
        description: "Please check your internet connection and try again.",
      }, "error");
      return;
    }
    
    // Check rate limiting (prevent multiple submissions within 5 seconds)
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      addToast({
        title: "Too Many Requests",
        description: "Please wait a few seconds before trying again.",
      }, "warning");
      return;
    }
    
    // Validate all fields
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        setTimeout(() => {
          const element = document.querySelector(`[name="${firstErrorField}"]`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            element.focus();
          }
        }, 100);
      }
      return;
    }
    
    setLoading(true);
    setSubmitting(true);
    setSubmitStage(0);
    setLastSubmitTime(now);
    
    try {
      // Start the animated submission process
      await simulateSubmitStages();
      
      // Sanitize input
      const sanitizedMessage = DOMPurify.sanitize(form.message);
      
      // Send email
await emailjs.send(
  "service_au4rreb",
  "template_fenoxrf",
  {
    from_name: form.name.trim(),
    reply_to: form.email.trim(),   // 🔴 هذا هو المفتاح السحري
    message: sanitizedMessage,
    timestamp: new Date().toLocaleString(),
  },
  "j027nEI_A_h6_5Avk"
);

      
      // Success
      addToast({
        title: "Message Sent Successfully!",
        description: "I'll get back to you within 24-48 hours.",
      }, "success");
      
      // Reset form
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setFieldValidation({});
      setFieldFocus({});
      
      // Generate new CSRF token
      const newToken = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      setCsrfToken(newToken);
      
    } catch (error) {
      console.error("EmailJS Error:", error);
      addToast({
        title: "Transmission Failed",
        description: error.text || "Please try again or contact me directly.",
      }, "error");
    } finally {
      setLoading(false);
      // Clear submission animation after a brief pause
      setTimeout(() => {
        setSubmitting(false);
        setSubmitStage(0);
      }, 1500);
    }
  };

  // Get field icon color
  const getFieldIconColor = (fieldName) => {
    if (errors[fieldName]) return "text-red-400 bg-red-500/10";
    if (fieldValidation[fieldName]?.type === "success") return "text-emerald-400 bg-emerald-500/10";
    if (fieldValidation[fieldName]?.type === "warning") return "text-amber-400 bg-amber-500/10";
    if (fieldValidation[fieldName]?.type === "info") return "text-blue-400 bg-blue-500/10";
    return "text-[#00BFFF] bg-[#00BFFF]/10";
  };

  // Get field border color
  const getFieldBorderColor = (fieldName) => {
    if (errors[fieldName]) return "border-red-500/50 focus:border-red-500";
    if (fieldValidation[fieldName]?.type === "success") return "border-emerald-500/30 focus:border-emerald-500";
    if (fieldValidation[fieldName]?.type === "warning") return "border-amber-500/30 focus:border-amber-500";
    if (fieldValidation[fieldName]?.type === "info") return "border-blue-500/30 focus:border-blue-500";
    return "border-white/10 focus:border-[#00BFFF]/50";
  };

  return (
    <>
      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <div className="relative w-full py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Responsive background grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,#00BFFF0A_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent,#00BFFF0A_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px]" />
        </div>

        {/* Connection indicator - Responsive positioning */}
        <div className="absolute top-4 left-4 sm:top-10 sm:left-10 flex items-center gap-2 sm:gap-3 z-20">
          <div className="relative">
            <div className={`w-3 h-3 sm:w-4 sm:h-4 ${isOnline ? "bg-green-500" : "bg-red-500"} rounded-full`} />
            <div className={`absolute inset-0 w-3 h-3 sm:w-4 sm:h-4 ${isOnline ? "bg-green-500" : "bg-red-500"} rounded-full animate-ping`} />
          </div>
          <div className="flex flex-col">
            <p className={`${styles.sectionSubText} ${isOnline ? "text-green-500" : "text-red-500"} font-mono tracking-wider text-xs sm:text-sm`}>
              {isOnline ? "CONNECTED" : "OFFLINE"}
            </p>
            <p className="text-gray-400 text-xs hidden sm:block">
              {isOnline ? "Ready to transmit" : "Check network connection"}
            </p>
          </div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
          {/* Main Title - Responsive */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent to-[#00BFFF]" />
              <p className={`${styles.sectionSubText} text-[#00BFFF]/80 text-xs sm:text-sm md:text-base`}>
                INITIATE_COMMUNICATION
              </p>
              <div className="w-8 sm:w-16 h-px bg-gradient-to-l from-transparent to-[#00BFFF]" />
            </div>
            
            <h2 className={`${styles.sectionHeadText} text-white mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl`}>
              Let's <span className="text-[#00BFFF]">Connect</span>
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto backdrop-blur-sm bg-white/5 rounded-xl p-4 sm:p-6 border border-white/10">
              Ready to bring your ideas to life? Send me a message and let's create something amazing together.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Form - Responsive */}
            <div className="xl:w-1/2">
              {submitting ? (
                <SubmitAnimation stage={submitStage} />
              ) : (
                <div className="relative">
                  {/* Form background effect - Responsive */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00BFFF] via-[#0080FF] to-[#00BFFF] rounded-2xl sm:rounded-3xl blur-xl opacity-20 animate-pulse-slow" />
                  
                  <div className="relative backdrop-blur-xl bg-gradient-to-br from-black/40 to-gray-900/20 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
                    {/* Form header - Responsive */}
                    <div className="mb-6 sm:mb-8 lg:mb-10">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="relative">
                            <div className="w-3 h-3 bg-green-500 rounded-full" />
                            <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                          </div>
                          <div>
                            <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
                              Send Message
                            </h3>
                            <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
                              <div className="w-1.5 h-1.5 bg-[#00BFFF] rounded-full" />
                              <p className="text-[#00BFFF]/70 text-xs sm:text-sm font-mono">
                                FORM_READY
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Reset button - Responsive */}
                        <button
                          type="button"
                          onClick={handleReset}
                          className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 border border-white/10 hover:border-[#00BFFF]/30 group mt-2 sm:mt-0"
                        >
                          <span className="group-hover:text-[#00BFFF] transition-colors duration-200 flex items-center gap-1 sm:gap-2">
                            <X className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="hidden sm:inline">Clear Form</span>
                            <span className="sm:hidden">Clear</span>
                          </span>
                        </button>
                      </div>
                      <p className="text-gray-400 text-sm sm:text-base pl-4 sm:pl-6 border-l-2 border-[#00BFFF]/30">
                        Fill out the form below. I'll get back to you within 24 hours.
                      </p>
                    </div>

                    {/* Form - Responsive spacing */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 lg:space-y-8">
                      {/* Name field */}
                      <div className="group">
                        <label className="block">
                          <div className="flex items-center gap-2 sm:gap-2 mb-2 sm:mb-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${getFieldIconColor("name").split(" ")[1]}`}>
                              <User className={`w-4 h-4 ${getFieldIconColor("name").split(" ")[0]}`} />
                            </div>
                            <div>
                              <span className="text-white font-medium text-sm tracking-wider uppercase">
                                Your Name
                              </span>
                              <p className="text-gray-500 text-xs hidden sm:block">Required field (min. 2 characters)</p>
                            </div>
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              required
                              minLength={2}
                              maxLength={50}
                              aria-label="Your name"
                              aria-required="true"
                              aria-invalid={!!errors.name}
                              placeholder="Enter your full name"
                              className={`w-full bg-black/30 backdrop-blur-sm py-3 sm:py-4 px-4 text-white rounded-xl border transition-all duration-200 ${getFieldBorderColor("name")} focus:outline-none placeholder-gray-500 text-sm sm:text-base font-medium`}
                            />
                            
                            {(fieldFocus.name || showAllErrors) && errors.name && (
                              <FormAlert
                                type="error"
                                message={errors.name}
                                field="name"
                              />
                            )}
                            
                            {fieldFocus.name && fieldValidation.name?.type === "success" && (
                              <FormAlert
                                type="success"
                                message={fieldValidation.name.message}
                                field="name"
                                onClose={() => setFieldValidation(prev => ({ ...prev, name: null }))}
                              />
                            )}
                          </div>
                        </label>
                      </div>

                      {/* Email field */}
                      <div className="group">
                        <label className="block">
                          <div className="flex items-center gap-2 sm:gap-2 mb-2 sm:mb-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${getFieldIconColor("email").split(" ")[1]}`}>
                              <Mail className={`w-4 h-4 ${getFieldIconColor("email").split(" ")[0]}`} />
                            </div>
                            <div>
                              <span className="text-white font-medium text-sm tracking-wider uppercase">
                                Email Address
                              </span>
                              <p className="text-gray-500 text-xs hidden sm:block">We'll never share your email</p>
                            </div>
                          </div>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              required
                              maxLength={100}
                              aria-label="Email address"
                              aria-required="true"
                              aria-invalid={!!errors.email}
                              placeholder="your.email@example.com"
                              className={`w-full bg-black/30 backdrop-blur-sm py-3 sm:py-4 px-4 text-white rounded-xl border transition-all duration-200 ${getFieldBorderColor("email")} focus:outline-none placeholder-gray-500 text-sm sm:text-base font-medium`}
                            />
                            
                            {(fieldFocus.email || showAllErrors) && errors.email && (
                              <FormAlert
                                type="error"
                                message={errors.email}
                                field="email"
                              />
                            )}
                            
                            {fieldFocus.email && fieldValidation.email?.type === "success" && (
                              <FormAlert
                                type="success"
                                message={fieldValidation.email.message}
                                field="email"
                                onClose={() => setFieldValidation(prev => ({ ...prev, email: null }))}
                              />
                            )}
                          </div>
                        </label>
                      </div>
                
                      {/* Message field */}
                      <div className="group">
                        <label className="block">
                          <div className="flex items-center justify-between mb-1 sm:mb-2">
                            <div className="flex items-center gap-2 sm:gap-2">
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ${getFieldIconColor("message").split(" ")[1]}`}>
                                <MessageSquare className={`w-4 h-4 ${getFieldIconColor("message").split(" ")[0]}`} />
                              </div>
                              <div>
                                <span className="text-white font-medium text-sm tracking-wider uppercase">
                                  Your Message
                                </span>
                                <p className="text-gray-500 text-xs hidden sm:block">Tell me about your project (10-500 characters)</p>
                              </div>
                            </div>
                          </div>
                          <div className="relative">
                            <textarea
                              rows={4}
                              name="message"
                              value={form.message}
                              onChange={handleChange}
                              onFocus={handleFocus}
                              onBlur={handleBlur}
                              required
                              minLength={10}
                              maxLength={500}
                              aria-label="Your message"
                              aria-required="true"
                              aria-invalid={!!errors.message}
                              placeholder="Describe your project, timeline, and requirements..."
                              className={`w-full bg-black/30 backdrop-blur-sm py-3 sm:py-4 px-4 text-white rounded-xl border transition-all duration-200 ${getFieldBorderColor("message")} focus:outline-none placeholder-gray-500 text-sm sm:text-base font-medium resize-none leading-relaxed`}
                            />
                            
                            <CharacterCounter 
                              current={form.message.length} 
                              max={500} 
                              showWarning={form.message.length > 450}
                            />
                            
                            {(fieldFocus.message || showAllErrors) && errors.message && (
                              <FormAlert
                                type="error"
                                message={errors.message}
                                field="message"
                              />
                            )}
                            
                            {fieldFocus.message && fieldValidation.message && fieldValidation.message.type !== "error" && (
                              <FormAlert
                                type={fieldValidation.message.type}
                                message={fieldValidation.message.message}
                                field="message"
                                onClose={() => setFieldValidation(prev => ({ ...prev, message: null }))}
                              />
                            )}
                          </div>
                        </label>
                      </div>

                      {/* Submit button - Responsive */}
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 lg:mt-10">
                        <button
                          type="submit"
                          disabled={loading || !isOnline}
                          className="flex-1 group relative overflow-hidden"
                        >
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#00BFFF] via-blue-500 to-[#00BFFF] rounded-xl sm:rounded-2xl blur-lg opacity-60 animate-pulse-slow" />
                          <div className={`relative bg-gradient-to-r from-gray-900/80 to-black/80 rounded-xl sm:rounded-2xl border ${!isOnline ? "border-gray-500/40" : "border-[#00BFFF]/40"} py-3 sm:py-4 px-4 sm:px-8 flex items-center justify-center gap-2 sm:gap-4 backdrop-blur-sm transition-all duration-200 ${!isOnline ? "" : "hover:border-[#00BFFF] hover:scale-[1.02]"} overflow-hidden`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00BFFF]/5 to-transparent animate-shimmer" />
                            
                            {!isOnline ? (
                              <>
                                <WifiOff className="w-4 h-4 sm:w-5 sm:h-6 text-gray-400 relative z-10" />
                                <div className="text-center relative z-10">
                                  <span className="text-gray-400 font-bold text-base sm:text-lg tracking-wider">
                                    Offline
                                  </span>
                                  <p className="text-gray-500 text-xs mt-0.5 sm:mt-1 hidden sm:block">Check your connection</p>
                                </div>
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 sm:w-5 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                                <div className="text-center relative z-10">
                                  <span className="text-white font-bold text-base sm:text-lg tracking-wider group-hover:text-[#00BFFF] transition-colors duration-200">
                                    {loading ? "Sending..." : "Send Message"}
                                  </span>
                                  <p className="text-gray-400 text-xs mt-0.5 sm:mt-1 hidden sm:block">Click to transmit data</p>
                                </div>
                                <div className="flex gap-1 sm:gap-1.5 relative z-10">
                                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${loading ? "bg-[#00BFFF] animate-pulse" : "bg-[#00BFFF]"}`} />
                                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${loading ? "bg-[#00BFFF] animate-pulse delay-75" : "bg-[#00BFFF]"}`} />
                                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${loading ? "bg-[#00BFFF] animate-pulse delay-150" : "bg-[#00BFFF]"}`} />
                                </div>
                              </>
                            )}
                          </div>
                        </button>
                      </div>
                    </form>

                    {/* Alternative contact info - Responsive Grid */}
                    <div className="mt-8 sm:mt-10 lg:mt-14 pt-6 sm:pt-8 lg:pt-10 border-t border-white/10">
                      <h4 className="text-white font-medium mb-3 sm:mb-4 lg:mb-6 flex items-center gap-2 sm:gap-3">
                        <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-[#00BFFF]" />
                        <span className="text-sm sm:text-base lg:text-lg">Other Ways to Connect</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        <a 
                          href="mailto:badaouiissam660@gmail.com"
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText("badaouiissam660@gmail.com");
                            addToast({
                              title: "Email Copied!",
                              description: "Email address copied to clipboard.",
                            }, "success");
                            window.location.href = "mailto:badaouiissam660@gmail.com";
                          }}
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-black/40 to-gray-900/20 rounded-xl border border-white/10 hover:border-[#00BFFF]/40 hover:bg-black/50 transition-all duration-200 group cursor-pointer hover:scale-[1.02]"
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">Email</p>
                            <p className="text-[#00BFFF]/80 text-xs truncate">badaouiissam660@gmail.com</p>
                          </div>
                        </a>
                        
                        <div 
                          className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-black/40 to-gray-900/20 rounded-xl border border-white/10 hover:border-[#00BFFF]/40 transition-all duration-200 group cursor-pointer hover:scale-[1.02]"
                          onClick={() => {
                            navigator.clipboard.writeText("Algeria, UTC+1");
                            addToast({
                              title: "Location Copied!",
                              description: "Location and timezone copied to clipboard.",
                            }, "info");
                          }}
                        >
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">Location</p>
                            <p className="text-gray-400 text-xs">Algeria • UTC+1</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-black/40 to-gray-900/20 rounded-xl border border-white/10">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#00BFFF]/20 to-blue-500/20 flex items-center justify-center">
                            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#00BFFF]" />
                          </div>
                          <div>
                            <p className="text-white text-sm font-semibold">Response Time</p>
                            <p className="text-gray-400 text-xs">24-48 hours</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Earth Canvas section - Responsive */}
            <div className="xl:w-1/2 flex flex-col gap-4 sm:gap-6 lg:gap-8">
              {/* Earth container - Responsive height */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
                {/* Earth Canvas - Interactive */}
                <div className="absolute inset-0 pointer-events-auto">
                  <EarthCanvas />
                </div>
                
                {/* Overlay info - Non-interactive */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top info bar - Responsive */}
                  <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                    <div className="backdrop-blur-md bg-black/40 rounded-xl p-3 sm:p-4 border border-white/10 pointer-events-none">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[#00BFFF]/20 to-blue-500/20 flex items-center justify-center border border-[#00BFFF]/30">
                            <Globe className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#00BFFF]" />
                          </div>
                          <div>
                            <h3 className="text-white font-bold text-sm sm:text-base lg:text-xl">Badaoui Issam</h3>
                            <p className="text-[#00BFFF] text-xs sm:text-sm">Full Stack Developer</p>
                          </div>
                        </div>
                        
                        {/* Algerian Flag - Responsive */}
                        <div className="flex items-center gap-2 pointer-events-auto">
                          <img 
                            src="https://flagcdn.com/dz.svg" 
                            alt="Algeria Flag" 
                            className="w-6 h-4 sm:w-8 sm:h-6 rounded-sm shadow-lg"
                            loading="lazy"
                          />
                          <span className="text-white text-xs sm:text-sm font-bold hidden sm:inline">DZ</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom status indicators - Responsive */}
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 right-3 sm:right-4 lg:right-6">
                    <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
                      <div className="backdrop-blur-md bg-black/40 rounded-xl p-2 sm:p-3 lg:p-4 border border-white/10 pointer-events-none">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <p className="text-[#00BFFF] text-xs font-mono uppercase tracking-wider">STATUS</p>
                        </div>
                        <p className="text-white font-medium text-sm">Available for Projects</p>
                      </div>
                      
                      <div className="backdrop-blur-md bg-black/40 rounded-xl p-2 sm:p-3 lg:p-4 border border-white/10 pointer-events-none">
                        <div className="flex items-center gap-1 sm:gap-2 mb-1">
                          <div className="w-2 h-2 bg-[#00BFFF] rounded-full" />
                          <p className="text-[#00BFFF] text-xs font-mono uppercase tracking-wider">TIMEZONE</p>
                        </div>
                        <p className="text-white font-medium text-sm">UTC+1 (CET)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security info - Responsive */}
              <div className="backdrop-blur-xl bg-gradient-to-br from-black/40 to-gray-900/20 rounded-2xl p-4 sm:p-6 border border-white/10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                  <h4 className="text-white font-medium text-sm sm:text-base">Security & Privacy</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="p-3 bg-gradient-to-br from-black/30 to-transparent rounded-xl border border-emerald-500/20">
                    <p className="text-emerald-400 text-xs font-mono mb-1">ENCRYPTED_TRANSMISSION</p>
                    <p className="text-gray-400 text-xs">All data is encrypted end-to-end</p>
                  </div>
                  <div className="p-3 bg-gradient-to-br from-black/30 to-transparent rounded-xl border border-blue-500/20">
                    <p className="text-blue-400 text-xs font-mono mb-1">NO_DATA_SHARING</p>
                    <p className="text-gray-400 text-xs">Your information stays private</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 sm:pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <Shield className="w-4 h-4" />
                    <span>Secured with SSL/TLS encryption</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes orbit {
          0% {
            transform: rotate(0deg) translate(40px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translate(40px) rotate(-360deg);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 640px) {
          input, textarea {
            font-size: 16px; /* Prevents iOS zoom on focus */
          }
          
          button, a {
            min-height: 44px; /* Better touch targets */
            min-width: 44px;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          .textarea {
            min-height: 120px;
          }
        }
      `}</style>
    </>
  );
};

export default SectionWrapper(Contact, "contact");