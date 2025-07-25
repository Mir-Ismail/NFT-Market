import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'lucide-react';
import { submitContactForm, updateFormData, clearError } from '../store/contactSlice';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const { formData, isSubmitting, success, error } = useSelector((state) => state.contact);

  useEffect(() => {
    if (success) {
      toast({
        title: "Thank you!",
        description: "We'll contact you within 24 hours to schedule your free consultation.",
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
      });
      dispatch(clearError());
    }
  }, [success, error, toast, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    dispatch(submitContactForm(formData));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">Schedule Your Free Consultation</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Enter your company name"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your Amazon business and goals"
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader className="w-5 h-5 animate-spin inline mr-2" />
              Sending...
            </>
          ) : (
            'Schedule Free Consultation'
          )}
        </button>
      </form>
    </div>
  );
}
