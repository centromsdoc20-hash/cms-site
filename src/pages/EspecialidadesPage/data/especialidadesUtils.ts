interface MapeamentoEspecialidade {
  [key: string]: string;
}

export const formatarProfissional = (especialidadeTitle: string): string => {
  const normalizeStr = (str: string): string => {
    return str.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
  };

  const especialidadeNormalizada = normalizeStr(especialidadeTitle);
  
  const mapeamento: MapeamentoEspecialidade = {
    'cardiologia': 'cardiologista',
    'cirurgia geral': 'cirurgião geral',
    'cirurgia vascular': 'cirurgião vascular',
    'clinica geral': 'clínico geral',
    'clinica geral integrativa': 'clínico geral integrativo',
    'dermatologia': 'dermatologista',
    'endocrinologia': 'endocrinologista',
    'gastroenterologia': 'gastroenterologista',
    'ginecologia e obstetricia': 'ginecologista e obstetra',
    'medicina do trabalho': 'médico do trabalho',
    'neurologia': 'neurologista',
    'nutricao': 'nutricionista',
    'odontologia': 'dentista',
    'oftalmologia': 'oftalmologista',
    'ortopedia e traumatologia': 'ortopedista e traumatologista',
    'otorrinolaringologia': 'otorrinolaringologista',
    'pediatria': 'pediatra',
    'pneumologia': 'pneumologista',
    'cirurgiao proctologista': 'proctologista',
    'psicologia': 'psicólogo',
    'psiquiatria': 'psiquiatra',
    'reumatologia': 'reumatologista',
    'urologia': 'urologista',
    
    'clinica': 'clínico geral',
    'nutrição': 'nutricionista',
    'ginecologia': 'ginecologista',
    'obstetricia': 'obstetra',
    'ortopedia': 'ortopedista',
    'traumatologia': 'traumatologista',
    'proctologia': 'proctologista',
    
    'alergologia': 'alergologista',
    'anestesiologia': 'anestesiologista',
    'hematologia': 'hematologista',
    'infectologia': 'infectologista',
    'nefrologia': 'nefrologista',
    'oncologia': 'oncologista',
    'radiologia': 'radiologista',
    'geriatria': 'geriatra',
    'fisioterapia': 'fisioterapeuta',
    'fonoaudiologia': 'fonoaudiólogo',
    'terapia ocupacional': 'terapeuta ocupacional',
    'homeopatia': 'homeopata',
    'acupuntura': 'acupunturista',
  };
  
  if (mapeamento[especialidadeNormalizada]) {
    return mapeamento[especialidadeNormalizada];
  }
  
  if (especialidadeNormalizada.includes('cirurgia')) {
    return 'cirurgião';
  }
  
  if (especialidadeNormalizada.includes('clinica')) {
    return 'clínico geral';
  }
  
  if (especialidadeNormalizada.endsWith('logia')) {
    return especialidadeNormalizada.slice(0, -4) + 'logista';
  }
  
  if (especialidadeNormalizada.endsWith('iatria')) {
    return especialidadeNormalizada.slice(0, -5) + 'iatra';
  }
  
  if (especialidadeNormalizada.endsWith('tria')) {
    return especialidadeNormalizada.slice(0, -3) + 'tra';
  }
  
  if (especialidadeNormalizada.endsWith('ica')) {
    return especialidadeNormalizada.slice(0, -3) + 'ico';
  }
  
  if (especialidadeNormalizada.endsWith('ia')) {
    const semIa = especialidadeNormalizada.slice(0, -2);
    if (semIa.endsWith('olog')) {
      return semIa + 'ogista';
    }
    return semIa + 'ista';
  }
  
  if (especialidadeNormalizada.includes('nutri')) {
    return 'nutricionista';
  }
  
  if (especialidadeNormalizada.includes('odont')) {
    return 'dentista';
  }
  
  if (especialidadeNormalizada.includes('psicol')) {
    return 'psicólogo';
  }
  
  if (especialidadeNormalizada.includes('fisioterap')) {
    return 'fisioterapeuta';
  }
  
  if (especialidadeNormalizada.endsWith('logia')) {
    return especialidadeNormalizada.replace(/logia$/, 'logista');
  }
  
  if (especialidadeNormalizada.endsWith('iatria')) {
    return especialidadeNormalizada.replace(/iatria$/, 'iatra');
  }
  
  if (especialidadeNormalizada.endsWith('ia')) {
    return especialidadeNormalizada.replace(/ia$/, 'ista');
  }
  
  return especialidadeTitle;
};

export const formatarTituloPagina = (especialidadeTitle: string): string => {
  const profissional = formatarProfissional(especialidadeTitle);
  return `O que faz um ${profissional}?`;
};

export const formatarTituloQuandoProcurar = (especialidadeTitle: string): string => {
  const profissional = formatarProfissional(especialidadeTitle);
  return `Quando procurar um ${profissional}?`;
};