import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, CheckCircle2, AlertCircle } from 'lucide-react'

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = type === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -2 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
      className="fixed bottom-10 right-5 md:right-10 z-[1000] max-w-[90vw] w-[400px]"
    >
      <div className={`relative bg-white border-4 border-black p-6 shadow-[8px_8px_0px_rgba(0,0,0,1)] flex items-start gap-4 overflow-hidden`}>
        <div className={`absolute top-0 left-0 w-2 h-full ${isSuccess ? 'bg-success' : 'bg-danger'}`} />
        
        <div className={`p-2 border-2 border-black ${isSuccess ? 'bg-success/10' : 'bg-danger/10'}`}>
          {isSuccess ? (
            <CheckCircle2 className="w-6 h-6 text-black" strokeWidth={3} />
          ) : (
            <AlertCircle className="w-6 h-6 text-black" strokeWidth={3} />
          )}
        </div>

        <div className="flex-grow">
          <h4 className="font-black uppercase tracking-widest text-[10px] text-black/40 mb-1">
            {isSuccess ? 'SYSTEM_CONFIRMATION' : 'SYSTEM_ERROR'}
          </h4>
          <p className="font-black text-black leading-tight text-sm">
            {message}
          </p>
        </div>

        <button 
          onClick={onClose}
          className="hover:bg-black/5 p-1 transition-colors"
        >
          <X className="w-5 h-5 text-black" strokeWidth={3} />
        </button>

        {/* Progress Bar */}
        <motion.div 
          initial={{ width: '100%' }}
          animate={{ width: '0%' }}
          transition={{ duration: 5, ease: 'linear' }}
          className={`absolute bottom-0 left-0 h-1 ${isSuccess ? 'bg-success' : 'bg-danger'}`}
        />
      </div>
    </motion.div>
  )
}

export default Notification
