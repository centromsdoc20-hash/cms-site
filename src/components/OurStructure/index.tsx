import { useState, useEffect, useCallback } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaShieldAlt,
  FaUserMd,
  FaHeartbeat,
  FaMicroscope,
  FaStethoscope
} from 'react-icons/fa';
import styles from './styles.module.scss';
import fachada from '../../assets/estrutura/fachada.jpg';
import img1 from '../../assets/estrutura/rec1_1.jpeg';
import img1_2 from '../../assets/estrutura/rec1-2.jpeg';
import img1_3 from '../../assets/estrutura/rec1_3.jpeg';
import consultorioEco from '../../assets/estrutura/consultorioEco.jpg';
import consultorioEco2 from '../../assets/estrutura/consultorioEco2.jpg';
import consultorioPsicologa from '../../assets/estrutura/consultorioPsicologa.jpg';
import consultorioGineco from '../../assets/estrutura/consultorioGineco.jpg';
import consultorioOftalmo from '../../assets/estrutura/consultorioOftalmo.jpg';
import consultorioPediatria from '../../assets/estrutura/pediatria.jpg';


interface GalleryImage {
  src: string;
  title: string;
  description: string;
  area: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function OurStructure() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage>({
    src: img1,
    title: "Recepção",
    description: "Ambiente sofisticado com atendimento personalizado e área de espera confortável",
    area: "Recepção"
  });
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const galleryImages: GalleryImage[] = [
    {
      src: fachada,
      title: "Fachada do Centro Médico Sapiranga",
      description: "Fachada do Centro Médico Sapiranga",
      area: "entrada"
    },
    {
      src: img1,
      title: "Recepção",
      description: "Ambiente sofisticado com atendimento personalizado e área de espera confortável",
      area: "Recepção"
    },
    {
      src: img1_2,
      title: "Ambiente de recepção",
      description: "Espaço de recepção com design moderno e conforto para os pacientes",
      area: "Recepção"
    },
    {
      src: img1_3,
      title: "Área de recepção",
      description: "Recepção ampla e iluminada, projetada para oferecer uma experiência acolhedora",
      area: "Recepção"
    },
    {
      src: consultorioEco,
      title: "Consultório de Ecografias",
      description: "Consultório equipado com tecnologia avançada para exames de ecografia",
      area: "Consultório"
    },
    {
      src: consultorioEco2,
      title: "Consultório de Ecografias",
      description: "Consultório moderno e confortável, projetado para exames de ecografia com tecnologia de ponta",
      area: "Consultório"
    },
    {
      src: consultorioPsicologa,
      title: "Consultório de Psicologia",
      description: "Espaço dedicado à psicologia, com ambiente tranquilo e profissionais qualificados",
      area: "Consultório"
    },
    {
      src: consultorioGineco,
      title: "Consultório de Ginecologia",
      description: "Consultório de ginecologia equipado com tecnologia avançada para atendimento especializado",
      area: "Consultório"
    },
    {
      src: consultorioOftalmo,
      title: "Consultório de Oftalmologia",
      description: "Consultório de oftalmologia moderno, com equipamentos de última geração para exames precisos",
      area: "Consultório"
    },
    {
      src: consultorioPediatria,
      title: "Consultório de Pediatria",
      description: "Consultório de pediatria projetado para oferecer um ambiente acolhedor e seguro para crianças",
      area: "Consultório"
    }
  ];

  const features: Feature[] = [
    {
      icon: <FaShieldAlt />,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração em todas as especialidades médicas"
    },
    {
      icon: <FaUserMd />,
      title: "Especialistas Qualificados",
      description: "Corpo clínico formado em centros de referência nacional e internacional"
    },
    {
      icon: <FaHeartbeat />,
      title: "Atendimento Integrado",
      description: "Sistema de prontuário eletrônico que conecta todas as especialidades"
    },
    {
      icon: <FaMicroscope />,
      title: "Laboratório Próprio",
      description: "Resultados de exames laboratoriais com rapidez e precisão garantidas"
    },
    {
      icon: <FaStethoscope />,
      title: "+20 Especialidades",
      description: "Cuidado completo em um único local, facilitando o tratamento multidisciplinar"
    }
  ];

  const nextImage = useCallback(() => {
    setCurrentIndex(prev => {
      const newIndex = (prev + 1) % galleryImages.length;
      setSelectedImage(galleryImages[newIndex]);
      setIsImageLoading(true);
      return newIndex;
    });
  }, [galleryImages]);

  const prevImage = useCallback(() => {
    setCurrentIndex(prev => {
      const newIndex = (prev - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[newIndex]);
      setIsImageLoading(true);
      return newIndex;
    });
  }, [galleryImages]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    setIsImageLoading(true);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  useEffect(() => {
    const img = new Image();
    img.src = selectedImage.src;
    img.onload = handleImageLoad;
  }, [selectedImage]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isAutoPlaying) {
      interval = setInterval(nextImage, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextImage]);

  return (
    <div id="estrutura" className={styles.structureContainer}>
      <div className={styles.decorativeGrid} />

      <div className={styles.contentWrapper}>
        <div className={styles.premiumHeader}>
          <span className={styles.subtitle}>Excelência em Saúde</span>
          <h1 className={styles.mainTitle}>
            Estrutura médica <span>completa</span>
          </h1>
          <p className={styles.leadText}>
            Ambiente projetado com tecnologia de ponta, conforto e segurança
            para oferecer o melhor cuidado em saúde.
          </p>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.gallerySection}>
            <div className={styles.galleryFrame}>
              <div className={styles.mainImageWrapper}>
                {isImageLoading && <div className={styles.imageSkeleton} />}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className={`${styles.mainImage} ${isImageLoading ? styles.loading : ''}`}
                  onLoad={handleImageLoad}
                />
                <div className={styles.imageOverlay} />

                <div className={styles.imageInfo}>
                  <div className={styles.imageNumber}>
                    {selectedImage.area.toUpperCase()}
                  </div>
                  <span className={styles.imageTitle}>{selectedImage.title}</span>
                  <p className={styles.imageDescription}>{selectedImage.description}</p>
                </div>

                <div className={styles.navigationControls}>
                  <button
                    className={styles.navButton}
                    onClick={() => {
                      prevImage();
                      setIsAutoPlaying(false);
                    }}
                    aria-label="Imagem anterior"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className={styles.navButton}
                    onClick={() => {
                      nextImage();
                      setIsAutoPlaying(false);
                    }}
                    aria-label="Próxima imagem"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.thumbnailsWrapper}>
              <div className={styles.thumbnailsGrid}>
                {galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className={`${styles.thumbnailItem} ${currentIndex === index ? styles.active : ''
                      }`}
                    onClick={() => goToImage(index)}
                    title={`${image.area} - ${image.title}`}
                  >
                    <img
                      src={image.src}
                      alt={`${image.area} - ${index + 1}`}
                      className={styles.thumbnailImage}
                    />
                    <div className={styles.thumbnailNumber}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.featuresSection}>
            <div className={styles.featuresIntro}>
              <h2 className={styles.introTitle}>Diferenciais da nossa estrutura</h2>
              <p className={styles.introText}>
                Cada aspecto foi cuidadosamente planejado para oferecer
                excelência no atendimento e conforto aos pacientes.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}