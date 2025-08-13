import { useState } from "react";
import { 
  Users, 
  Target, 
  Award, 
  Clock, 
  Shield, 
  Zap,
  Heart,
  CheckCircle,
  Star,
  ArrowRight,
  Eye,
  TrendingUp,
  Building,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Briefcase,
  GraduationCap,
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import HeaderBanner from "../components/HeaderBanner";

export default function AboutPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const stats = [
    { number: "500+", label: "Companies Served", icon: <Building className="w-8 h-8" /> },
    { number: "8+", label: "Years Experience", icon: <Calendar className="w-8 h-8" /> },
    { number: "50,000+", label: "Employees Managed", icon: <Users className="w-8 h-8" /> },
    { number: "98.5%", label: "Client Satisfaction", icon: <Star className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Privacy",
      description: "We maintain the highest standards of data security and privacy protection for all employee information and HR data."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Innovation Excellence",
      description: "Continuously evolving our HR solutions with cutting-edge technology to meet the changing needs of modern workplaces."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "People First",
      description: "Every feature we build puts people at the center, creating solutions that enhance the employee experience and HR efficiency."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Continuous Improvement",
      description: "We constantly refine our platform based on user feedback and industry best practices to deliver exceptional value."
    }
  ];

  const teamMembers = [
    {
      name: "Dr. Alphonse Byiringiro",
      position: "Founder & CEO",
      experience: "15 Years",
      specialization: "HR Strategy & Digital Transformation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: "Visionary leader with extensive experience in HR technology and organizational development across East Africa."
    },
    {
      name: "Yves Ntamashimikiro",
      position: "Chief Technology Officer",
      experience: "12 Years",
      specialization: "Software Architecture & System Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Expert in building scalable HR platforms with focus on security, performance, and user experience."
    },
    {
      name: "Sarah Uwimana",
      position: "Head of HR Solutions",
      experience: "10 Years",
      specialization: "HR Operations & Process Optimization",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      description: "Dedicated to designing HR workflows that streamline operations and enhance employee engagement."
    },
    {
      name: "Grace Mukamana",
      position: "Customer Success Director",
      experience: "8 Years",
      specialization: "Client Relations & Implementation",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: "Ensures seamless implementation and ongoing success for organizations adopting ABY HR Management."
    }
  ];

  const milestones = [
    {
      year: "2016",
      title: "Company Founded",
      description: "Started with a mission to digitize HR processes for African businesses, beginning in Rwanda"
    },
    {
      year: "2018",
      title: "First 100 Clients",
      description: "Reached milestone of serving 100 organizations with our core HR management platform"
    },
    {
      year: "2020",
      title: "Remote Work Solutions",
      description: "Launched enhanced remote work capabilities during the global shift to digital workplaces"
    },
    {
      year: "2022",
      title: "Regional Expansion",
      description: "Extended services across East Africa, serving clients in Kenya, Uganda, and Tanzania"
    },
    {
      year: "2024",
      title: "AI-Powered Features",
      description: "Introduced artificial intelligence capabilities for predictive analytics and automated insights"
    }
  ];

  const testimonials = [
    {
      quote: "ABY HR Management transformed our entire workforce management process. The efficiency gains have been remarkable.",
      author: "John Mugisha",
      position: "HR Director",
      company: "TechCorp Rwanda"
    },
    {
      quote: "The platform's intuitive design made employee onboarding seamless. Our team adoption was incredibly smooth.",
      author: "Mary Kamau",
      position: "People Operations Manager",
      company: "Growth Solutions Kenya"
    },
    {
      quote: "Outstanding customer support and continuous innovation. ABY has been instrumental in our digital transformation.",
      author: "David Ssemwanga",
      position: "CEO",
      company: "Innovation Hub Uganda"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Header Section */}
      <HeaderBanner
        title="About ABY HR Management"
        subtitle="Home / About us"
      backgroundStyle="image"
        icon={<Users className="w-10 h-10 mx-auto" />}
      />
      
      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transforming HR Management in Africa
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                ABY HR Management was founded with a clear vision: to provide African businesses with 
                world-class HR technology that simplifies workforce management and drives organizational success.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We understand the unique challenges facing businesses in our region and have built our 
                platform to address these specific needs while maintaining international standards of 
                functionality and security.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-primary-50 rounded-lg p-4 hover:bg-primary-100 transition-colors duration-300">
                    <div className="text-primary-600 mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-primary-700 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg">
                <Globe className="w-8 h-8 mb-2" />
                <div className="text-sm font-medium">Serving East Africa</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-primary-600 mb-4">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower African organizations with innovative HR technology that simplifies workforce 
                management, enhances employee experience, and drives sustainable business growth through 
                efficient human resource practices.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-primary-600 mb-4">
                <Eye className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading HR technology platform in Africa, recognized for innovation, reliability, 
                and our commitment to transforming how organizations manage their most valuable asset - their people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-100">
                  <div className="text-primary-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Journey</h3>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that shaped ABY HR Management
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            <div className="lg:hidden absolute left-8 top-0 h-full w-0.5 bg-primary-200"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                }`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="lg:hidden absolute left-6 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`
                    w-full lg:w-5/12 
                    pl-16 lg:pl-0
                    ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}
                  `}>
                    <div className="bg-primary-50 rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-100">
                      <div className="text-xl sm:text-2xl font-bold text-primary-700 mb-2">{milestone.year}</div>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{milestone.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h3>
            <p className="text-lg sm:text-xl text-gray-600">
              Hear from organizations that trust ABY HR Management
            </p>
          </div>

          <div className="relative bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center">
              <p className="text-lg sm:text-xl text-gray-600 mb-6 italic leading-relaxed">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex flex-col items-center">
                <h4 className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].author}</h4>
                <p className="text-primary-600 font-medium">{testimonials[activeTestimonial].position}</p>
                <p className="text-gray-500 text-sm">{testimonials[activeTestimonial].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-primary-600" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === activeTestimonial ? 'bg-primary-600' : 'bg-primary-200'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6 text-primary-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}