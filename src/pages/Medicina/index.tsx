import BannerPages from "../../components/BannerPages";
import banner from '../../assets/estrutura/suaEmpresa.jpg';
import HowToHire from "../ParaSuaEmpresa/Components/CTA";
import BenefitsForCompanies from "../ParaSuaEmpresa/Components/BenefitsForCompanies";
import FilterItems from "../../components/FilterItems";
import Texts from "../../components/UI/Texts";

export default function Medicina() {
    return (
        <>
             <BannerPages
                            backgroundImage={banner}
                            title="Medicina do Trabalho"
                            subtitle="Soluções completas em saúde ocupacional"
                            description="Mais de 45 anos cuidando da saúde corporativa com excelência e tecnologia"
                            specialties={['Medicina Ocupacional', 'Exames Laboratoriais', 'Perícias']}
                            buttonText="Solicitar Proposta"
                            buttonLink="/contato"
                            style="style2"
                        />
                        <Texts
                title="Tudo o que sua empresa precisa"
                subtitle="Conheça nossas soluções em saúde ocupacional."
            />

            <FilterItems
                subtitle="Confira Nossos"
                title="Serviços"
                disableNavigation={true}
                text="O Centro Médico Sapiranga sempre atendo ás inovações tecnológicas e à legislação, oferece programas relacionados
                 à segurança e medicina do trabalho visando ao cumprimento das Normas Regulamentadoras do Ministério do Trabalho, do INSS e à adequação ao eSocial."
                items={[

                    {
        id: 1,
        title: "Assistência Técnica Pericial",
        description: "Perícias técnicas especializadas para avaliação de condições de trabalho e saúde ocupacional",
        tag: "JUNTA MÉDICA E PERÍCIA MÉDICA",
    },
    {
        id: 2,
        title: "Laudo de Insalubridade e Periculosidade",
        description: "Avaliação e emissão de laudos técnicos para caracterização de atividades insalubres e perigosas",
        tag: "LAUDOS TÉCNICOS",
    },
    {
        id: 3,
        title: "LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)",
        description: "Documentação técnica obrigatória para avaliação das condições ambientais do local de trabalho",
        tag: "LAUDOS TÉCNICOS",
    },
    {
        id: 4,
        title: "PGR (Programa de Gerenciamento de Riscos)",
        description: "Programa completo para identificação, avaliação e controle de riscos ocupacionais",
        tag: "LAUDOS TÉCNICOS",
    },
    {
        id: 5,
        title: "PCMSO (Programa de Controle Médico de Saúde Ocupacional)",
        description: "Programa obrigatório para monitoramento da saúde dos trabalhadores conforme NR-7",
        tag: "LAUDOS TÉCNICOS",
    },
    {
        id: 6,
        title: "L.I.P",
        description: "Laudo de Insalubridade e Periculosidade, avaliação técnica para caracterização de atividades insalubres e perigosas",
        tag: "LAUDOS TÉCNICOS",
    },
    {
        id: 7,
        title: "Exames Admissionais e Demissionais",
        description: "Avaliações médicas obrigatórias para admissão, demissão e mudança de função",
        tag: "ASO (Atestado de Saude Ocupacional)",
    },
    {
        id: 8,
        title: "Exames Periódicos",
        description: "Acompanhamento contínuo da saúde dos colaboradores através de exames regulares",
        tag: "ASO (Atestado de Saude Ocupacional)",
    },
    {
        id: 9,
        title: "Exames de Retorno ao Trabalho",
        description: "Avaliação médica para colaboradores que retornam após afastamento superior a 30 dias",
        tag: "ASO (Atestado de Saude Ocupacional)",
    },
    {
        id: 10,
        title: "Exames de Mudança de Função",
        description: "Avaliação para colaboradores que mudam de atividade com exposição a diferentes riscos",
        tag: "ASO (Atestado de Saude Ocupacional)",
    },
    {
        id: 11,
        title: "ASO (Atestado de Saúde Ocupacional)",
        description: "Emissão de documentação obrigatória comprovando a aptidão do trabalhador",
        tag: "ASO (Atestado de Saude Ocupacional)",
    },
    {
        id: 12,
        title: "PPP (Perfil Profissiográfico Previdenciário)",
        description: "Documentação técnica para fins previdenciários com histórico de exposição a riscos",
        tag: "ASO (Atestado de Saude Ocupacional)",
    },
    {
        id: 13,
        title: "Gestão de e-Social",
        description: "Serviço completo de gestão e adequação ao sistema e-Social do governo federal",
        tag: "DOCUMENTOS TRABALHISTAS",
    },
    {
        id: 14,
        title: "NR-05 - CIPA",
        description: "Treinamento completo para formação da Comissão Interna de Prevenção de Acidentes, capacitando membros para atuar na prevenção de acidentes e doenças ocupacionais",
        tag: "TREINAMENTOS",
    },
    {
        id: 15,
        title: "NR-06 - EPI",
        description: "Treinamento sobre Equipamentos de Proteção Individual, abordando seleção correta, uso adequado, conservação e responsabilidades",
        tag: "TREINAMENTOS",
    },
    {
        id: 16,
        title: "NR-10 - Instalações Elétricas",
        description: "Treinamento obrigatório para profissionais que trabalham com instalações elétricas, abordando medidas de controle e segurança em serviços com eletricidade",
        tag: "TREINAMENTOS",
    },
    {
        id: 17,
        title: "NR-11 - Transporte e Manuseio de Materiais",
        description: "Capacitação para operação segura de equipamentos de transporte e manuseio de materiais, incluindo empilhadeiras e pontes rolantes",
        tag: "TREINAMENTOS",
    },
    {
        id: 18,
        title: "NR-12 - Máquinas e Equipamentos",
        description: "Treinamento para operação segura de máquinas e equipamentos, abordando medidas de proteção, procedimentos e dispositivos de segurança",
        tag: "TREINAMENTOS",
    },
    {
        id: 19,
        title: "NR-17 - Ergonomia",
        description: "Capacitação sobre adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores, prevenindo LER/DORT",
        tag: "TREINAMENTOS",
    },
    {
        id: 20,
        title: "NR-20 - Produtos Químicos",
        description: "Treinamento para profissionais que atuam com produtos químicos, abordando armazenamento, manuseio e procedimentos em emergências",
        tag: "TREINAMENTOS",
    },
    {
        id: 21,
        title: "NR-35 - Trabalho em Altura",
        description: "Treinamento obrigatório para atividades acima de 2 metros, abordando técnicas, equipamentos e procedimentos de segurança",
        tag: "TREINAMENTOS",
    },
    {
        id: 22,
        title: "RT-14 - Brigada de Incêndio",
        description: "Formação completa de brigada de incêndio, capacitando equipes para prevenção e combate a princípios de incêndio e primeiros socorros",
        tag: "TREINAMENTOS",
    },
    {
        id: 23,
        title: "Exame de Eletrocardiograma",
        description: "Avaliação da atividade elétrica do coração para diagnóstico de arritmias, isquemia e outras condições cardíacas",
        tag: "EXAMES",
    },
    {
        id: 24,
        title: "Eletroencefalograma (EEG)",
        description: "Registro da atividade elétrica cerebral para diagnóstico de epilepsia, distúrbios do sono e outras condições neurológicas",
        tag: "EXAMES",
    },
    {
        id: 25,
        title: "Espirometria",
        description: "Avaliação da função pulmonar para diagnóstico de doenças respiratórias como asma, DPOC e fibrose pulmonar",
        tag: "EXAMES",
    },
    {
        id: 26,
        title: "Acuidade Visual",
        description: "Teste para avaliação da capacidade visual, incluindo visão de cores, campo visual e percepção de profundidade",
        tag: "EXAMES",
    },
    {
        id: 27,
        title: "Audiometria",
        description: "Avaliação da capacidade auditiva para diagnóstico de perda auditiva, zumbido e outras condições relacionadas",
        tag: "EXAMES",
    },
    {
        id: 28,
        title: "Raio-X",
        description: "Exame de imagem para avaliação de ossos, pulmões e outras estruturas internas",
        tag: "EXAMES",
    },
    {
        id: 29,
        title: "Exames Laboratoriais",
        description: "Coleta e análise de amostras biológicas para diagnóstico de condições de saúde e monitoramento de tratamentos",
        tag: "EXAMES",
    }
]}
                buttonText="Ver todos os serviços"
                showButton={true}
            />
            <BenefitsForCompanies />
           
            <HowToHire />
        </>
    )
}