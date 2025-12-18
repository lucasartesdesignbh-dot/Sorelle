
import { Service } from '../types';

const CLINIC_COVER_IMAGE = 'https://lh3.googleusercontent.com/p/AF1QipME_97bPT80xgzQQz-tiFqOIa-gBs0TCV8r2PUe=s680-w680-h510-rw';

export const SERVICES: Service[] = [
  {
    id: 'depilacao-laser',
    title: 'Depilação à Laser',
    description: 'Eliminação definitiva de pelos com tecnologia indolor.',
    fullDescription: 'Nossa depilação a laser utiliza tecnologia de ponta com ponteira resfriada para garantir o máximo conforto. Indicado para todos os tipos de pele, o tratamento elimina os pelos desde a raiz, tratando também a foliculite e clareando a região.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'limpeza-pele',
    title: 'Limpeza de Pele',
    description: 'Remoção de impurezas e renovação celular profunda.',
    fullDescription: 'Um protocolo completo que remove cravos, impurezas e células mortas. Inclui higienização, esfoliação, extração minuciosa e máscara calmante/hidratante personalizada para seu tipo de pele.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'drenagem-linfatica',
    title: 'Drenagem Linfática',
    description: 'Redução de inchaço e eliminação de toxinas.',
    fullDescription: 'Técnica de massagem suave que estimula o sistema linfático a trabalhar de forma acelerada. Ideal para reduzir retenção de líquidos, melhorar a circulação e auxiliar no pós-operatório.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'hifu',
    title: 'HIFU (Ultrassom Micro e Macro)',
    description: 'Lifting facial e corporal sem cortes.',
    fullDescription: 'Tecnologia que utiliza ondas de ultrassom focado para criar pontos de coagulação nas camadas mais profundas da pele e fáscia muscular, estimulando colágeno e promovendo um efeito lifting imediato e duradouro.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'bioestimulador',
    title: 'Bioestimulador de Colágeno',
    description: 'Recupere a firmeza e sustentação da sua pele.',
    fullDescription: 'Aplicação de substâncias (como Sculptra ou Radiesse) que estimulam a produção natural de colágeno pelo próprio organismo. Trata a flacidez facial e corporal de forma gradual e natural.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'toxina-botulinica',
    title: 'Toxina Botulínica',
    description: 'Prevenção e suavização de rugas de expressão.',
    fullDescription: 'O famoso Botox atua relaxando a musculatura responsável pelas rugas dinâmicas (testa, pés de galinha e entre as sobrancelhas), proporcionando um aspecto rejuvenescido e descansado.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'intradermoterapia',
    title: 'Intradermoterapia',
    description: 'Tratamentos localizados para gordura e flacidez.',
    fullDescription: 'Aplicação de mesclas de ativos diretamente na derme para tratar queixas específicas como gordura localizada, celulite, queda capilar ou rejuvenescimento facial.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'carboxiterapia',
    title: 'Carboxiterapia',
    description: 'Melhora da circulação e combate à celulite.',
    fullDescription: 'Infusão de gás carbônico medicinal nos tecidos. Melhora a oxigenação, quebra células de gordura e estimula a produção de colágeno e elastina.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'radiofrequencia',
    title: 'Radiofrequência',
    description: 'Combate à flacidez e gordura localizada.',
    fullDescription: 'Geração de calor profundo nos tecidos que estimula a contração das fibras de colágeno existentes e a produção de novas fibras. Excelente para flacidez de rosto e corpo.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'microagulhamento',
    title: 'Microagulhamento',
    description: 'Indução de colágeno para cicatrizes e manchas.',
    fullDescription: 'Procedimento que utiliza microagulhas para criar canais na pele, estimulando a regeneração natural e a permeação de ativos (drug delivery). Trata melasma, poros abertos e cicatrizes.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'peeling-quimico',
    title: 'Peeling Químico',
    description: 'Renovação da textura e brilho da pele.',
    fullDescription: 'Aplicação de ácidos que promovem a descamação controlada da pele. Ideal para tratar acne, manchas, rugas finas e melhorar a textura geral do rosto.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'peeling-diamante',
    title: 'Peeling de Diamante',
    description: 'Microesfoliação física para pele radiante.',
    fullDescription: 'Esfoliação mecânica que remove a camada superficial da pele, desobstruindo poros e estimulando a produção de colágeno sem a necessidade de químicos fortes.',
    imageUrl: CLINIC_COVER_IMAGE
  },
  {
    id: 'massagem-relaxante',
    title: 'Massagem Relaxante',
    description: 'Alívio de tensões e bem-estar profundo.',
    fullDescription: 'Manobras manuais suaves e firmes que visam o relaxamento muscular, redução do estresse e equilíbrio mental. O momento perfeito de autocuidado na sua rotina.',
    imageUrl: CLINIC_COVER_IMAGE
  }
];
