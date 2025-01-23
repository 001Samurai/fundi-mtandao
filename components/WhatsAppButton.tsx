import React from 'react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: 'bottom-right' | 'bottom-left';
  size?: number;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = 'Hello! I have a question.',
  position = 'bottom-right',
  size = 56
}) => {
  // Prepare WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Positioning classes
  const positionClasses = {
    'bottom-right': 'right-6 bottom-6',
    'bottom-left': 'left-6 bottom-6'
  };

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`
        fixed ${positionClasses[position]} 
        z-50 rounded-full shadow-lg 
        hover:scale-110 transition-transform duration-300
        flex items-center justify-center
      `}
      style={{ 
        width: `${size}px`,
        height: `${size}px`
      }}
      aria-label="Contact us on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width={size * 0.6} 
        height={size * 0.6}
      >
        {/* WhatsApp logo background circle */}
        <circle cx="12" cy="12" r="12" fill="#25D366"/>
        
        {/* WhatsApp logo path */}
        <path 
          fill="white" 
          d="M17.472 14.382c-.297-.15-1.758-.867-2.031-.967-.273-.099-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.224-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.131-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.511-5.26c0-5.445 4.436-9.882 9.881-9.882 2.64 0 5.122 1.029 6.988 2.895a9.825 9.825 0 012.895 6.989c-.002 5.445-4.438 9.881-9.881 9.881"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;