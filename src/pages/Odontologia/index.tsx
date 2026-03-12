import OdontologiaGridSection from "../../components/OdontologiaGridSection";
import banner from '../../assets/estrutura/DSC_6702.jpg';
import { 
  FaSmile,
  FaSnowflake,
  FaTeethOpen,
  FaUserInjured,
  FaLaptopMedical,
  FaCertificate,
  FaHeartbeat,
  FaFillDrip,
  FaTooth,
  FaTeeth,
  FaUserMd,
  FaStethoscope
} from 'react-icons/fa';
import type { JSX } from "react";

export default function Odontologia() {
  
  const tratamentos: Array<{ id: number; nome: string; icone: JSX.Element; descricao: string; categoria: "cirurgia" | "estetica" | "preventiva" | "restauradora" | "ortodontia";   }> = [
  
  {
    id: 1,
    nome: "Clínica Geral: Reabilitação e Manutenção Preventiva",
    icone: <FaUserMd />,
    descricao: "Restaurações, próteses, clareamento, extrações e tratamentos para bruxismo e raspagem de tártaro com precisão técnica",
    categoria: "preventiva"
  },
  {
    id: 2,
    nome: "Restaurações Estéticas e Próteses",
    icone: <FaFillDrip />,
    descricao: "Reabilitação da estrutura dentária e substituição de elementos ausentes para devolver eficiência mastigatória",
    categoria: "restauradora"
  },
  {
    id: 3,
    nome: "Clareamento Dentário",
    icone: <FaSnowflake />,
    descricao: "Procedimentos clínicos para recuperação do brilho e tonalidade natural do esmalte dental",
    categoria: "estetica"
  },
  {
    id: 4,
    nome: "Periodontia Preventiva",
    icone: <FaTeeth />,
    descricao: "Raspagem de tártaro e limpeza profilática para garantir saúde das gengivas e tecidos de suporte",
    categoria: "preventiva"
  },
  {
    id: 5,
    nome: "Extrações Dentárias",
    icone: <FaUserInjured />,
    descricao: "Procedimentos seguros para remoção de elementos dentários sem possibilidade de recuperação",
    categoria: "cirurgia"
  },
  {
    id: 6,
    nome: "Tratamento de Bruxismo",
    icone: <FaTeethOpen />,
    descricao: "Diagnóstico e acompanhamento do ranger ou apertar de dentes com proteção do esmalte e alívio muscular",
    categoria: "restauradora"
  },
  {
    id: 7,
    nome: "Endodontia Especializada",
    icone: <FaHeartbeat />,
    descricao: "Tratamento da polpa dentária (canal) para salvar o dente natural e eliminar quadros dolorosos agudos",
    categoria: "restauradora"
  },
  {
    id: 8,
    nome: "Ortodontia: Harmonia e Função Oclusal",
    icone: <FaTeethOpen />,
    descricao: "Planejamento e correção do posicionamento dentário com aparelhos fixos ou alinhadores modernos",
    categoria: "ortodontia"
  },
  {
    id: 9,
    nome: "Cirurgia Bucomaxilofacial",
    icone: <FaStethoscope />,
    descricao: "Intervenções cirúrgicas complexas incluindo remoção de sisos inclusos, correções mandibulares e tratamento de disfunções na ATM",
    categoria: "cirurgia"
  }
]

  return (
    <OdontologiaGridSection
      bannerImage={banner}
      bannerStyles="style1"
      pageTitle="Odontologia"
      pageSubtitle="Excelência e Tecnologia Integrada à Sua Saúde Bucal"
      sectionTitle="Nossos Tratamentos Odontológicos"
      sectionDescription="Oferecemos atendimento multidisciplinar focado na resolução técnica e alta performance clínica. Nossa equipe especializada garante diagnósticos precisos e tratamentos definitivos com tecnologia de ponta."
      items={tratamentos}
      ctaTitle="Cuide do seu sorriso hoje mesmo"
      ctaDescription="Agende sua avaliação odontológica com nossos especialistas e tenha um sorriso saudável, funcional e radiante"
      primaryButtonText="Agendar Consulta Odontológica"
      secondaryButtonText="(51) 3500-0714"
      features={[
        { icon: <FaTooth />, text: 'Especialistas Credenciados' },
        { icon: <FaLaptopMedical />, text: 'Tecnologia de Ponta' },
        { icon: <FaCertificate />, text: 'Formação Diversificada' },
        { icon: <FaSmile />, text: 'Resultados com Longevidade' }
      ]}
    />
  );
}