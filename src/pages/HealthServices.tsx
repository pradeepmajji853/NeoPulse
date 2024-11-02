import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Building2, 
  Store, 
  Phone, 
  Calendar, 
  MapPin,
  Clock,
  Pill,
  Video
} from 'lucide-react';

const HealthServices = () => {
  const services = [
    {
      icon: Video,
      title: 'Free Doctor Consultations',
      description: 'Connect with certified healthcare professionals for video consultations at no cost',
      action: 'Book Consultation',
      availability: '24/7 Available'
    },
    {
      icon: Building2,
      title: 'Hospital Network',
      description: 'Access our network of partner hospitals for specialized care and treatments',
      action: 'Find Hospitals',
      partners: '500+ Hospitals'
    },
    {
      icon: Store,
      title: 'Local Medical Stores',
      description: 'Order medicines from verified local pharmacies with doorstep delivery',
      action: 'Order Medicines',
      delivery: 'Express Delivery'
    },
    {
      icon: Phone,
      title: 'Telemedicine Services',
      description: '24/7 virtual healthcare support and follow-up consultations',
      action: 'Start Session',
      support: 'Round the Clock'
    }
  ];

  const nearbyFacilities = [
    {
      name: 'City General Hospital',
      distance: '0.8 km',
      rating: 4.8,
      specialties: ['Emergency Care', 'Surgery', 'Pediatrics']
    },
    {
      name: 'HealthPlus Pharmacy',
      distance: '0.3 km',
      rating: 4.6,
      services: ['24/7 Open', 'Home Delivery']
    },
    {
      name: 'MedCare Clinic',
      distance: '1.2 km',
      rating: 4.9,
      specialties: ['Family Medicine', 'Vaccination']
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Comprehensive Healthcare Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access quality healthcare services through our integrated network of doctors, hospitals, and medical stores.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-50 rounded-xl">
                  <service.icon className="w-8 h-8 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <button className="px-6 py-2 bg-teal-600 text-white rounded-full hover:bg-teal-700 transition-colors">
                      {service.action}
                    </button>
                    <span className="text-sm font-medium text-teal-600">
                      {Object.values(service)[4]}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nearby Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-sm mb-16"
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <MapPin className="w-6 h-6 text-teal-600 mr-2" />
            Nearby Healthcare Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {nearbyFacilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-slate-100 rounded-xl hover:border-teal-100 transition-colors"
              >
                <h3 className="font-semibold text-slate-800 mb-2">{facility.name}</h3>
                <div className="flex items-center text-sm text-slate-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {facility.distance}
                </div>
                <div className="flex items-center text-sm text-slate-600 mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  Open Now
                </div>
                <div className="flex flex-wrap gap-2">
                  {(facility.specialties || facility.services).map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <button className="flex items-center justify-center space-x-2 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
            <Calendar className="w-5 h-5 text-teal-600" />
            <span className="font-medium text-teal-600">Schedule Appointment</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
            <Pill className="w-5 h-5 text-teal-600" />
            <span className="font-medium text-teal-600">Order Medicines</span>
          </button>
          <button className="flex items-center justify-center space-x-2 p-4 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
            <Stethoscope className="w-5 h-5 text-teal-600" />
            <span className="font-medium text-teal-600">Emergency Support</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthServices;