// ── FAQ DATA (atualizado conforme Novos_FAQs_-_PITSTOP.xlsx) ──
const faqs = [
  // SOFTSHOP
  { num: 7778, title: "SOFTSHOP: ANÁLISE", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7778" },
  { num: 7777, title: "SOFTSHOP: DÚVIDA/TREINAMENTO GERAL", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7777" },

  // SOFTCOMSHOP
  { num: 7780, title: "SOFTCOMSHOP: ANÁLISE", cat: "SOFTCOMSHOP", cls: "Análise", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7780" },
  { num: 7779, title: "SOFTCOMSHOP: TREINAMENTO", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7779" },

  // PDV/NFCe
  { num: 4397, title: "PDV: ANÁLISE", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/4397" },
  { num: 8017, title: "PDV CONFIGURAÇÕES", cat: "PDV", cls: "Configuração", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8017" },
  { num: 682,  title: "PDV: TREINAMENTO", cat: "PDV", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/682" },
  { num: 3886, title: "PDV: NFCE PENDENTE", cat: "PDV", cls: "Vendas Pendentes", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/3886" },
  { num: 8018, title: "PDV RESTAURANTE", cat: "PDV", cls: "Restaurante", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8018" },

  // GNRE
  { num: 8037, title: "GNRE: ANALISE/DUVIDA", cat: "GNRE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8037" },

  // NFE
  { num: 7781, title: "NFE: ANÁLISE", cat: "NFE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7781" },
  { num: 1073, title: "NFE: DUVIDA/TREINAMENTO GERAL", cat: "NFE", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/1073" },
  { num: 2637, title: "Softshop > NFe: Nota de Devolução de Compra ou Venda - Como fazer?", cat: "NFE", cls: "Emissão de Nota", link: "" },

  // MDFE
  { num: 7784, title: "MDFE: ANÁLISE/TREINAMENTO", cat: "MDFE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7784" },

  // CTE
  { num: 7785, title: "CTE: ANÁLISE/TREINAMENTO", cat: "CTE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7785" },

  // NFSE
  { num: 7791, title: "NFSE: ANÁLISE/TREINAMENTO", cat: "NFSE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7791" },

  // VENDA MAIS
  { num: 7795, title: "VENDA MAIS: ANÁLISE/TREINAMENTO", cat: "VENDA MAIS", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7795" },

  // DRICA IA
  { num: 7797, title: "DRICA IA: ANÁLISE/ERRO", cat: "DRICA IA", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7797" },

  // VENDAS 360
  { num: 7800, title: "VENDAS 360: ANÁLISE/TREINAMENTO", cat: "VENDAS 360", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7800" },

  // COLLECTOR
  { num: 7803, title: "COLLECTOR: ANÁLISE/TREINAMENTO", cat: "COLLECTOR", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7803" },

  // QUERO BÔNUS
  { num: 7806, title: "QUERO BÔNUS: ANÁLISE/TREINEMENTO", cat: "QUERO BÔNUS", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7806" },

  // IMPRESSORA
  { num: 7812, title: "IMPRESSORAS: COMPARTILHAMENTO INTERNO/EXTERNO", cat: "IMPRESSORA", cls: "Compartilhamento / Redirecionamento", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7812" },
  { num: 7813, title: "IMPRESSORAS: INSTALAÇÃO/ERROS TÉRMICAS", cat: "IMPRESSORA", cls: "Impressora Termica (Bobina)", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7813" },

  // MEU CARRINHO
  { num: 7816, title: "MEU CARRINHO: ANÁLISE/TREINAMENTO", cat: "MEU CARRINHO", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7816" },

  // SMOBILE
  { num: 7818, title: "SMOBILE: ANÁLISE", cat: "SMOBILE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7818" },
  { num: 3726, title: "Duvidas SMobile (Vídeo)", cat: "SMOBILE", cls: "Dúvida/Treinamento", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7818" },

  // INSTALAÇÃO
  { num: 7819, title: "INSTALAÇÃO: SERVIDOR", cat: "INSTALAÇÃO", cls: "Instalação Servidor", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7819" },
  { num: 7820, title: "INSTALAÇÃO: ESTAÇÃO", cat: "INSTALAÇÃO", cls: "Instalação Estação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7820" },
  { num: 516,  title: "PDV: INSTALAÇÃO", cat: "INSTALAÇÃO", cls: "Instação Outros", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/516" },

  // NUVEM FISCAL
  { num: 7822, title: "NUVEM FISCAL: ANÁLISE/TREINAMENTO", cat: "NUVEM FISCAL", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7822" },

  // SOFTMOV
  { num: 7824, title: "SOFTMOV: ANÁLISE/TREINAMENTO", cat: "SOFTMOV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7824" },

  // PROACAD
  { num: 7825, title: "PROACAD: ANÁLISE/TREINAMENTO", cat: "PROACAD", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7825" },

  // BALANÇA
  { num: 7827, title: "BALANÇA: ANÁLISE/IMPLANTAÇÃO", cat: "BALANÇA", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7827" },

  // MFE / SAT
  { num: 7829, title: "MFE/SAT: ANÁLISE", cat: "MFE/SAT", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7829" },

  // TEF
  { num: 7831, title: "TEF: ANÁLISE", cat: "TEF", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7831" },
  { num: 7832, title: "TEF: INSTALAÇÃO", cat: "TEF", cls: "Instalação TEF/Treinamento", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7832" },
  { num: 8048, title: "TEF: DÚVIDA", cat: "TEF", cls: "Instalação TEF/Treinamento", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7832" },

  // BOLETOS
  { num: 7834, title: "BOLETOS: ANÁLISE/IMPLANTAÇÃO", cat: "BOLETOS", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7834" },

  // CHATBOT
  { num: 7835, title: "CHATBOT ANÁLISE/IMPLANTAÇÃO", cat: "CHATBOT", cls: "Análise/Erro", link: "" },

  // FARMÁCIA
  { num: 7838, title: "FARMÁCIA: ANÁLISE/TREINAMENTO", cat: "FARMÁCIA", cls: "Erro/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7838" },

  // MARKETPLACE
  { num: 7841, title: "MARKETPLACE: ANÁLISE/TREINAMENTO", cat: "MARKETPLACE", cls: "Erro/Duvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7841" },

  // ETIQUETA
  { num: 3525, title: "ETIQUETAS: INSTALAR OU BLOCAR", cat: "ETIQUETA", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/3525" },
  { num: 3399, title: "Softshop > Etiquetas: Como gerar etiquetas no Softshop Mapa Mental?", cat: "ETIQUETA", cls: "Análise/Erro", link: "" },

  // SMART
  { num: 7843, title: "SMART/COMANDA: INSTALAÇÃO", cat: "SMART", cls: "Smart/Comanda Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7843" },
  { num: 7844, title: "SMART/COMANDA: ANÁLISE", cat: "SMART", cls: "Smart/Comanda Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7844" },
  { num: 7995, title: "SELFHOST: ANÁLISE/ERRO", cat: "SMART", cls: "Selfhost", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7995" },

  // PIT STOP
  { num: 8157, title: "PIT STOP - REGISTRO DE TRANSFERÊNCIA DE LIGAÇÃO A OUVIDORIA", cat: "PIT STOP", cls: "Registro de Transferencia", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/8157" },
  { num: 8156, title: "PIT STOP - REGISTRO DE TRANSFERÊNCIA DE LIGAÇÃO AO FINANCEIRO", cat: "PIT STOP", cls: "Registro de Transferencia", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/8156" },
  { num: 8158, title: "PIT STOP - ATENDIMENTO FINANCEIRO - GERAÇÃO DE CHAVE PIX - BAIXA DE PARCELA", cat: "PIT STOP", cls: "Registro de Transferencia", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/8158" },
  { num: 7858, title: "PIT STOP - Solicitação de Folga/Troca de Horário", cat: "PIT STOP", cls: "Operacional PIT STOP", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/7858" },
  { num: 8159, title: "PIT STOP - Apoio Operacional PEV", cat: "PIT STOP", cls: "Operacional PIT STOP", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/8159" },
  { num: 9306, title: "PIT STOP - REGISTRO DE RECLAMAÇÃO SOBRE ATENDIMENTO ESPECÍFICO", cat: "PIT STOP", cls: "Registro de Reclamação", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/9306" },
  { num: 9307, title: "PIT STOP - CLIENTE COM OC JÁ EM ABERTO - REGISTRO DE LIGAÇÃO", cat: "PIT STOP", cls: "Registro de Ligações", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/9307" },
  { num: 9308, title: "PIT STOP - CLIENTE INTERESSADO EM NOVOS PRODUTOS - REGISTRO DE LIGAÇÃO", cat: "PIT STOP", cls: "Registro de Ligações", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/9308" },
  { num: 9309, title: "PIT STOP - AO ATENDER, A LIGAÇÃO CAIU - REGISTRO DE LIGAÇÃO", cat: "PIT STOP", cls: "Registro de Ligações", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/9309" },

  // CATÁLOGO DIGITAL
  { num: 8026, title: "CATALOGO DIGITAL: ANÁLISE", cat: "CATÁLOGO DIGITAL", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8026" },
  { num: 8027, title: "CATALOGO DIGITAL: DUVIDA", cat: "CATÁLOGO DIGITAL", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8027" },

  // SPED
  { num: 4028, title: "SPED: Analise de Erros Informados pela Contabilidade (Tratamento de Dados Softshop)", cat: "SPED", cls: "Análise/Duvidas", link: "" },
  { num: 4417, title: "Atendimento SPED", cat: "SPED", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/4417" },
  { num: 4787, title: "Instalar e configurar o SPED .Net", cat: "SPED", cls: "Instalação/Configuração", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/4787" },
  { num: 5860, title: "Atendimento SINTEGRA", cat: "SPED", cls: "Análise/Duvidas", link: "" },

  // REMOTO
  { num: 8028, title: "REMOTO ACESSO: ANALISE", cat: "REMOTO", cls: "Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8028" },
  { num: 482,  title: "REMOTO: Criar Atalho Remoto", cat: "REMOTO", cls: "Configuração", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/482" },

  // ÁREA DO CONTADOR
  { num: 6997, title: "Área do Contador Configuração e alteração", cat: "ÁREA DO CONTADOR", cls: "Liberação/Treinamento", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/6997" },

  // ÁREA DO CLIENTE
  { num: 2844, title: "Softcom > Área Clientes: Como acessar a Área de Clientes?", cat: "ÁREA DO CLIENTE", cls: "Liberação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/2844" },

  // PIX
  { num: 8031, title: "PIX: ANÁLISE", cat: "PIX", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8031" },
  { num: 8032, title: "PIX: DUVIDA", cat: "PIX", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8032" },

  // CHECAR
  { num: 8029, title: "CHECAR: ANÁLISE", cat: "CHECAR", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8029" },
  { num: 8030, title: "CHECAR: DUVIDA", cat: "CHECAR", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8030" },

  // CERTIFICADO DIGITAL
  { num: 302,  title: "Instalação ou configuração de Certificado Digital", cat: "CERTIFICADO DIGITAL", cls: "Análise/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/302" },

  // BACKUPCLOUD
  { num: 6120, title: "BackupCloud: Como funciona?", cat: "BACKUPCLOUD", cls: "Análise/Instalação", link: "" },

  // SOFTSHOP (novos)
  { num: 316,  title: "SOFTSHOP NÃO ABRE", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/316" },
  { num: 4392, title: "SOFTSHOP - Sistema Lento (Mapa Mental)", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/4392" },
  { num: 5923, title: "Como realizar Conciliação Bancaria?", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/5923" },
  { num: 5988, title: "Softshop > Compras: Entrada de Nota Fiscal pelo XML", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/5988" },
  { num: 8184, title: "SOFTSHOP > ANALISE > PROBLEMAS/DUVIDAS FISCAIS", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8184" },
  { num: 8185, title: "SOFTSHOP > ANALISE > RELATORIO DIVERGENTE", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8185" },
  { num: 8186, title: "SOFTSHOP > TREINAMENTO/DUVIDA", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8186" },
  { num: 8187, title: "SOFTSHOP > IMPLANTAÇÃO/INSTALAÇÃO", cat: "SOFTSHOP", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8187" },
  { num: 8206, title: "CTE > ANALISE", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8206" },
  { num: 8207, title: "CTE > DUVIDA/TREINAMENTO", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8207" },
  { num: 8215, title: "CTE > IMPLANTACAO", cat: "SOFTSHOP", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8215" },
  { num: 8227, title: "SOFTSHOP > ANALISE > MDFE", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8227" },
  { num: 8228, title: "SOFTSHOP > DUVIDA > MDFE", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8228" },
  { num: 8229, title: "SOFTSHOP > ANALISE > NFSE", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8229" },
  { num: 8230, title: "SOFTSHOP > DUVIDA > NFSE", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8230" },
  { num: 8232, title: "SOFTSHOP > DUVIDA > NFE > DEVOLUCAO", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8232" },
  { num: 8252, title: "SOFTSHOP > DUVIDA > CADASTROS", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8252" },
  { num: 8253, title: "SOFTSHOP > DUVIDA > ALTERAR VENDA", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8253" },
  { num: 8254, title: "SOFTSHOP > DUVIDA > CONTAS PAGAR/RECEBER", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8254" },
  { num: 8255, title: "SOFTSHOP > DUVIDA > BACKUP", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8255" },
  { num: 8257, title: "SOFTSHOP > DUVIDA > ORCAMENTO E DAV", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8257" },
  { num: 8258, title: "SOFTSHOP > DUVIDA > CONFIGURAÇÕES DA EMPRESA", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8258" },
  { num: 8259, title: "SOFTSHOP > DUVIDA > CONTROLE DE ESTOQUE", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8259" },
  { num: 8260, title: "SOFTSHOP > DUVIDA > GESTOR DE PRECOS/PROMOCOES", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8260" },
  { num: 8261, title: "SOFTSHOP > DUVIDA > INTEGRACOES", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8261" },
  { num: 9275, title: "SOFTSHOP > DUVIDA > RELATÓRIOS", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9275" },
  { num: 9276, title: "SOFTSHOP > ANALISE > NFE > ERROS ROTINAS EMISSAO", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9276" },
  { num: 9277, title: "SOFTSHOP > ANALISE > NFE > DUPLICIDADE", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9277" },
  { num: 9288, title: "SOFTSHOP > ANALISE > NFE > INFORMACOES FISCAIS", cat: "SOFTSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9288" },
  { num: 9290, title: "SOFTSHOP > DUVIDA > CONFIGURACOES FISCAIS", cat: "SOFTSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9290" },

  // SOFTCOMSHOP (novos)
  { num: 8176, title: "SOFTCOMSHOP > ANALISE > CACHE", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8176" },
  { num: 8177, title: "SOFTCOMSHOP > ANALISE > INDISPONIBILIDADE SERVIDOR", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8177" },
  { num: 8178, title: "SOFTCOMSHOP > ANALISE > MIGRAÇÃO URL", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8178" },
  { num: 8179, title: "SOFTCOMSHOP > ANALISE > NAO ABRE", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8179" },
  { num: 8180, title: "SOFTCOMSHOP > ANALISE > RELATORIO DIVERGENTE", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8180" },
  { num: 8181, title: "SOFTCOMSHOP > ANALISE > ERROS DE OPERAÇÃO", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8181" },
  { num: 8182, title: "SOFTCOMSHOP > TREINAMENTO/DUVIDA", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8182" },
  { num: 8183, title: "SOFTCOMSHOP > IMPLANTAÇÃO/INSTALAÇÃO", cat: "SOFTCOMSHOP", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8183" },
  { num: 8208, title: "SOFTCOMSHOP > ANALISE > MDFE", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8208" },
  { num: 8209, title: "SOFTCOMSHOP > DUVIDA > MDFE", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8209" },
  { num: 8210, title: "SOFTCOMSHOP > CHECAR > DUVIDA/TREINAMENTO", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8210" },
  { num: 8211, title: "SOFTCOMSHOP > CHECAR > ANALISE", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8211" },
  { num: 8212, title: "SOFTCOMSHOP > ANALISE > NFE", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8212" },
  { num: 8213, title: "SOFTCOMSHOP > DUVIDA > NFE", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8213" },
  { num: 8214, title: "SOFTCOMSHOP > ANALISE > NFSE", cat: "SOFTCOMSHOP", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8214" },
  { num: 8241, title: "SOFTCOMSHOP > DUVIDA > NFSE", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8241" },
  { num: 8262, title: "SOFTCOMSHOP > DUVIDA > BOLETO", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8262" },
  { num: 8263, title: "SOFTCOMSHOP > DUVIDA > CADASTROS", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8263" },
  { num: 8264, title: "SOFTCOMSHOP > DUVIDA > CONFIGURAÇÕES DA EMPRESA", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8264" },
  { num: 8265, title: "SOFTCOMSHOP > DUVIDA > CONFIGURACOES FISCAIS", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8265" },
  { num: 8266, title: "SOFTCOMSHOP > DUVIDA > CONTAS PAGAR/RECEBER", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8266" },
  { num: 8267, title: "SOFTCOMSHOP > DUVIDA > CONTROLE DE ESTOQUE", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8267" },
  { num: 8268, title: "SOFTCOMSHOP > DUVIDA > GESTOR DE PRECOS/PROMOCOES", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8268" },
  { num: 8269, title: "SOFTCOMSHOP > DUVIDA > INTEGRACOES", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8269" },
  { num: 8270, title: "SOFTCOMSHOP > DUVIDA > NUVEM", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8270" },
  { num: 8271, title: "SOFTCOMSHOP > DUVIDA > RELATORIOS", cat: "SOFTCOMSHOP", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8271" },

  // PDV (novos)
  { num: 8238, title: "PDV > ANALISE > CONTINGENCIA", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8238" },
  { num: 8239, title: "PDV > ANALISE > BANCO DE DADOS OFFLINE", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8239" },
  { num: 8240, title: "PDV > ANALISE > ERROS GERAIS", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8240" },
  { num: 8247, title: "PDV > RESTAURANTE > ANALISE", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8247" },
  { num: 8248, title: "PDV > RESTAURANTE > ANALISE > REFERENCIA DE OBJETO", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8248" },
  { num: 9282, title: "PDV > ANALISE > ERRO AO FINALIZAR VENDA", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9282" },
  { num: 9283, title: "PDV > ANALISE > REFERENCIA DE OBJETO", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9283" },
  { num: 9291, title: "PDV > ANALISE > TEF > SCOPE", cat: "PDV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9291" },

  // NFE (novos - Emissor NFe)
  { num: 8235, title: "EMISSOR NFE > INSTALACAO/IMPLANTACAO", cat: "NFE", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8235" },
  { num: 9278, title: "EMISSOR NFE > ANALISE > ERROS GERAIS DO EMISSOR", cat: "NFE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9278" },
  { num: 9279, title: "EMISSOR NFE > DUVIDA > CANCELAMENTO NFE", cat: "NFE", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9279" },
  { num: 9280, title: "EMISSOR NFE > DUVIDA > REIMPRESSAO NFE", cat: "NFE", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9280" },
  { num: 9281, title: "EMISSOR NFE > DUVIDA > CARTA DE CORRECAO", cat: "NFE", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9281" },
  { num: 9286, title: "EMISSOR NFE > DUVIDA > ROTINA DE PROCESSAMENTO", cat: "NFE", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/9286" },

  // PIX (novo)
  { num: 8205, title: "PIX > IMPLANTAÇÃO", cat: "PIX", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8205" },

  // BOLETOS (novo)
  { num: 8236, title: "LINK DE PAGAMENTO", cat: "BOLETOS", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8236" },

  // CHATBOT (novos)
  { num: 8188, title: "CHATBOT > TREINAMENTO", cat: "CHATBOT", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8188" },
  { num: 8189, title: "CHATBOT > IMPLANTAÇÃO/INSTALAÇÃO", cat: "CHATBOT", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8189" },

  // DRICA IA (novos)
  { num: 7766, title: "DRICA IA > IMPLANTAÇÃO/INSTALAÇÃO", cat: "DRICA IA", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/7766" },
  { num: 8190, title: "DRICA IA > TREINAMENTO", cat: "DRICA IA", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8190" },

  // COLLECTOR (novos)
  { num: 8191, title: "COLLECTOR > ANALISE", cat: "COLLECTOR", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8191" },
  { num: 8192, title: "COLLECTOR > TREINAMENTO", cat: "COLLECTOR", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8192" },
  { num: 8193, title: "COLLECTOR > IMPLANTAÇÃO/INSTALAÇÃO", cat: "COLLECTOR", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8193" },

  // MARKETPLACE (novos)
  { num: 8194, title: "MARKETPLACE > ANALISE", cat: "MARKETPLACE", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8194" },
  { num: 8195, title: "MARKETPLACE > IMPLANTACAO/INSTALACAO", cat: "MARKETPLACE", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8195" },
  { num: 8196, title: "MARKETPLACE > TREINAMENTO", cat: "MARKETPLACE", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8196" },

  // MEU CARRINHO (novos)
  { num: 8197, title: "MEU CARRINHO > ANALISE", cat: "MEU CARRINHO", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8197" },
  { num: 8198, title: "MEU CARRINHO > DUVIDA", cat: "MEU CARRINHO", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8198" },
  { num: 8199, title: "MEU CARRINHO > IMPLANTACAO/INSTALACAO", cat: "MEU CARRINHO", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8199" },

  // SOFTMOV (novos)
  { num: 8200, title: "SOFTMOV > ANALISE", cat: "SOFTMOV", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8200" },
  { num: 8201, title: "SOFTMOV > DUVIDA", cat: "SOFTMOV", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8201" },

  // QUERO BÔNUS (novos)
  { num: 8202, title: "QUERO BONUS > ANALISE", cat: "QUERO BÔNUS", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8202" },
  { num: 8203, title: "QUERO BONUS > DUVIDA", cat: "QUERO BÔNUS", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8203" },
  { num: 8204, title: "QUERO BONUS > IMPLANTACAO/INSTALACAO", cat: "QUERO BÔNUS", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8204" },

  // VENDA MAIS (novos)
  { num: 8216, title: "VENDA MAIS > IMPLANTACAO/INSTALACAO", cat: "VENDA MAIS", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8216" },
  { num: 8217, title: "VENDA MAIS > DUVIDA/TREINAMENTO", cat: "VENDA MAIS", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8217" },
  { num: 8218, title: "VENDA MAIS > ANALISE", cat: "VENDA MAIS", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8218" },

  // VENDAS 360 (novos)
  { num: 8219, title: "VENDAS 360 > ANALISE", cat: "VENDAS 360", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8219" },
  { num: 8220, title: "VENDAS 360 > DUVIDA/TREINAMENTO", cat: "VENDAS 360", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8220" },
  { num: 8221, title: "VENDAS 360 > IMPLANTACAO/INSTALACAO", cat: "VENDAS 360", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8221" },

  // CATÁLOGO DIGITAL (novo)
  { num: 8223, title: "CATALOGO DIGITAL: IMPLANTACAO/INSTALACAO", cat: "CATÁLOGO DIGITAL", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8223" },

  // SMART (novos)
  { num: 8224, title: "SMART > ANALISE", cat: "SMART", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8224" },
  { num: 8225, title: "SMART > DUVIDA/TREINAMENTO", cat: "SMART", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8225" },
  { num: 8226, title: "SMART > IMPLANTACAO/INSTALACAO", cat: "SMART", cls: "Implantação/Instalação", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8226" },

  // INSTALAÇÃO (novos)
  { num: 3865, title: "Infra: Substituição de Periféricos ou Equipamentos", cat: "INSTALAÇÃO", cls: "Análise/Erro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/3865" },
  { num: 4393, title: "Envio de E-mail (Mapa Mental)", cat: "INSTALAÇÃO", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/4393" },

  // SMOBILE (novo)
  { num: 6589, title: "Ta na Mão - Instruções", cat: "SMOBILE", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/6589" },

  // PROCESSO (novos - categoria nova)
  { num: 2775, title: "PROCESSO > CLIENTE > CLIENTE RESOLVEU SOZINHO", cat: "PROCESSO", cls: "Registro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/2775" },
  { num: 8242, title: "PROCESSO > CLIENTE > CANCELAMENTO DE PRODUTOS SOFTCOM", cat: "PROCESSO", cls: "Registro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8242" },
  { num: 8250, title: "PROCESSO > CLIENTE > ATENDIMENTO FINANCEIRO", cat: "PROCESSO", cls: "Registro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8250" },
  { num: 8272, title: "PROCESSO > CLIENTE > FALAR COM TECNICO ESPECIFICO", cat: "PROCESSO", cls: "Registro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8272" },
  { num: 8273, title: "PROCESSO > SOFTCOM > AGENDAMENTO EXTERNO", cat: "PROCESSO", cls: "Registro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8273" },
  { num: 8274, title: "PROCESSO > CLIENTE > CONT DO ATENDIMENTO ANTERIOR", cat: "PROCESSO", cls: "Registro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8274" },
  { num: 8275, title: "PROCESSO > CLIENTE > OUVIDORIA", cat: "PROCESSO", cls: "Registro", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8275" },

  // SISTEMAS ESPECÍFICOS (novos - categoria nova)
  { num: 8243, title: "SISTEMAS ESPECIFICOS > SOFTMOV", cat: "SISTEMAS ESPECÍFICOS", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8243" },
  { num: 8244, title: "SISTEMAS ESPECIFICOS > SOFTCLIN", cat: "SISTEMAS ESPECÍFICOS", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8244" },
  { num: 8245, title: "SISTEMAS ESPECIFICOS > PROACAD", cat: "SISTEMAS ESPECÍFICOS", cls: "Treinamento/Dúvida", link: "http://10.0.0.20/helptools2/public/core/promover/detalhe/id/8245" },
];

// ── Mapa de classe CSS da barra lateral por categoria ──
const barClassMap = {
  "SOFTSHOP":           "bar-softshop",
  "SOFTCOMSHOP":        "bar-softcomshop",
  "PDV":                "bar-pdv",
  "GNRE":               "bar-gnre",
  "NFE":                "bar-nfe",
  "MDFE":               "bar-mdfe",
  "CTE":                "bar-cte",
  "NFSE":               "bar-nfse",
  "VENDA MAIS":         "bar-vendamais",
  "DRICA IA":           "bar-dricaia",
  "VENDAS 360":         "bar-vendas360",
  "COLLECTOR":          "bar-collector",
  "QUERO BÔNUS":        "bar-querobônus",
  "IMPRESSORA":         "bar-impressora",
  "MEU CARRINHO":       "bar-meucarrinho",
  "SMOBILE":            "bar-smobile",
  "INSTALAÇÃO":         "bar-instalação",
  "NUVEM FISCAL":       "bar-nuvemfiscal",
  "SOFTMOV":            "bar-softmov",
  "PROACAD":            "bar-proacad",
  "BALANÇA":            "bar-balança",
  "MFE/SAT":            "bar-mfesat",
  "TEF":                "bar-tef",
  "BOLETOS":            "bar-boletos",
  "CHATBOT":            "bar-chatbot",
  "FARMÁCIA":           "bar-farmacia",
  "MARKETPLACE":        "bar-marketplace",
  "ETIQUETA":           "bar-etiqueta",
  "SMART":              "bar-smart",
  "PIT STOP":           "bar-pitstop",
  "CATÁLOGO DIGITAL":   "bar-catalogo",
  "SPED":               "bar-sped",
  "REMOTO":             "bar-remoto",
  "ÁREA DO CONTADOR":   "bar-contador",
  "ÁREA DO CLIENTE":    "bar-cliente",
  "PIX":                "bar-pix",
  "CHECAR":             "bar-checar",
  "CERTIFICADO DIGITAL":"bar-certdigital",
  "BACKUPCLOUD":        "bar-backup",
  "PROCESSO":           "bar-processo",
  "SISTEMAS ESPECÍFICOS": "bar-sistemas",
};

// ── Build category list with counts ──
const catCounts = {};
faqs.forEach(f => { catCounts[f.cat] = (catCounts[f.cat] || 0) + 1; });
const allCats = ["Todos", ...new Set(faqs.map(f => f.cat))];
let activeFilter = "Todos";
let searchTerm = "";
let categoryFilterTerm = "";
let compactView = localStorage.getItem("pitstop-compact") === "1";
let recentCopies = [];
try {
  recentCopies = JSON.parse(localStorage.getItem("pitstop-recent") || "[]");
} catch (e) { recentCopies = []; }

function clsClass(cls) {
  const l = cls.toLowerCase();
  if (l.includes("análise") || l.includes("erro") || l.includes("analise")) return "cls-analise";
  if (l.includes("treinamento") || l.includes("dúvida") || l.includes("duvida") || l.includes("liberação") || l.includes("liberacao")) return "cls-treinamento";
  if (l.includes("config") || l.includes("configuração")) return "cls-config";
  if (l.includes("instalação") || l.includes("instalacao") || l.includes("instação") || l.includes("implantação") || l.includes("implantacao")) return "cls-instalacao";
  if (l.includes("registro") || l.includes("operacional")) return "cls-operacional";
  return "cls-outros";
}

function barClass(cat) {
  return barClassMap[cat] || "bar-default";
}

function renderDropdown() {
  const items = document.getElementById("dropdownItems");
  items.innerHTML = "";
  const term = categoryFilterTerm.toLowerCase().trim();
  const visibleCats = allCats.filter(cat => !term || cat.toLowerCase().includes(term));

  if (visibleCats.length === 0) {
    items.innerHTML = `<div class="dropdown-item" style="cursor:default; color:var(--muted);">Nenhuma categoria encontrada</div>`;
    return;
  }

  visibleCats.forEach(cat => {
    const item = document.createElement("div");
    item.className = "dropdown-item" + (cat === activeFilter ? " active" : "");
    const label = document.createElement("span");
    label.textContent = cat;
    item.appendChild(label);
    if (cat !== "Todos") {
      const badge = document.createElement("span");
      badge.className = "dropdown-item-count";
      badge.textContent = catCounts[cat] || 0;
      item.appendChild(badge);
    } else {
      const badge = document.createElement("span");
      badge.className = "dropdown-item-count";
      badge.textContent = faqs.length;
      item.appendChild(badge);
    }
    item.onclick = () => {
      activeFilter = cat;
      document.getElementById("dropdownLabel").textContent = cat;
      closeDropdown();
      renderDropdown();
      renderGrid();
    };
    items.appendChild(item);
  });
}

function toggleDropdown() {
  const trigger = document.getElementById("dropdownTrigger");
  const menu = document.getElementById("dropdownMenu");
  const isOpen = menu.classList.contains("open");
  if (isOpen) { closeDropdown(); } else {
    trigger.classList.add("open");
    menu.classList.add("open");
    const searchBox = document.getElementById("dropdownSearch");
    setTimeout(() => searchBox && searchBox.focus(), 50);
  }
}

function closeDropdown() {
  document.getElementById("dropdownTrigger").classList.remove("open");
  document.getElementById("dropdownMenu").classList.remove("open");
}

document.addEventListener("click", e => {
  if (!document.getElementById("dropdownWrap").contains(e.target)) closeDropdown();
});

document.getElementById("dropdownSearch").addEventListener("input", e => {
  categoryFilterTerm = e.target.value;
  renderDropdown();
});

document.getElementById("dropdownSearch").addEventListener("click", e => {
  e.stopPropagation();
});

// ── Atalho de teclado "/" para focar a busca ──
document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
    e.preventDefault();
    document.getElementById("searchInput").focus();
  }
  if (e.key === "Escape" && document.activeElement.id === "searchInput") {
    clearSearch();
    document.activeElement.blur();
  }
});

function clearSearch() {
  searchTerm = "";
  const input = document.getElementById("searchInput");
  input.value = "";
  document.getElementById("searchClear").classList.remove("visible");
  renderGrid();
  input.focus();
}

function clearAllFilters() {
  activeFilter = "Todos";
  document.getElementById("dropdownLabel").textContent = "Todos";
  renderDropdown();
  clearSearch();
}

// ── Toggle de visualização (grid / compacto) ──
function applyViewMode() {
  const grid = document.getElementById("faqGrid");
  const toggle = document.getElementById("viewToggle");
  if (compactView) {
    grid.classList.add("compact");
    toggle.classList.add("compact");
  } else {
    grid.classList.remove("compact");
    toggle.classList.remove("compact");
  }
}

document.getElementById("viewToggle").addEventListener("click", () => {
  compactView = !compactView;
  localStorage.setItem("pitstop-compact", compactView ? "1" : "0");
  applyViewMode();
  renderGrid();
});

function renderGrid() {
  const grid = document.getElementById("faqGrid");
  const count = document.getElementById("faqCount");
  const term = searchTerm.toLowerCase().trim();

  const filtered = faqs.filter(f => {
    const matchCat = activeFilter === "Todos" || f.cat === activeFilter;
    const matchSearch = !term ||
      f.title.toLowerCase().includes(term) ||
      String(f.num).includes(term) ||
      f.cat.toLowerCase().includes(term) ||
      f.cls.toLowerCase().includes(term);
    return matchCat && matchSearch;
  });

  count.innerHTML = `<strong>${filtered.length}</strong> FAQ${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`;

  if (filtered.length === 0) {
    const suggestions = allCats.slice(1, 6);
    const chips = suggestions.map(cat =>
      `<button class="empty-state-btn" onclick="quickFilterCategory('${cat.replace(/'/g, "\\'")}')">${cat}</button>`
    ).join("");
    grid.innerHTML = `<div class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <h3>Nenhum FAQ encontrado</h3>
      <p>Tente ajustar a busca ou o filtro de categoria.</p>
      <div class="empty-state-actions">
        <button class="empty-state-btn" onclick="clearAllFilters()">Limpar filtros</button>
        ${chips}
      </div>
    </div>`;
    return;
  }

  if (activeFilter === "Todos" && !term) {
    const groups = {};
    filtered.forEach(f => {
      if (!groups[f.cat]) groups[f.cat] = [];
      groups[f.cat].push(f);
    });

    let html = "";
    Object.entries(groups).forEach(([cat, items]) => {
      html += `<div class="section-divider"><span class="section-divider-label">${cat}</span><div class="section-divider-line"></div></div>`;
      items.forEach((f, i) => { html += cardHTML(f, i); });
    });
    grid.innerHTML = html;
  } else {
    grid.innerHTML = filtered.map((f, i) => cardHTML(f, i)).join("");
  }
}

function quickFilterCategory(cat) {
  activeFilter = cat;
  document.getElementById("dropdownLabel").textContent = cat;
  renderDropdown();
  clearSearch();
}

function cardHTML(f, i) {
  const delay = Math.min(i * 0.04, 0.4);
  return `
  <div class="faq-card ${barClass(f.cat)}" style="animation-delay:${delay}s">
    <div class="card-top">
      <span class="faq-num">#${f.num}</span>
      <span class="faq-class-tag ${clsClass(f.cls)}">${f.cls}</span>
    </div>
    <div class="faq-title" title="${f.title.replace(/"/g, '&quot;')}">${f.title}</div>
    <div class="faq-meta">
      <span class="faq-cat-tag">${f.cat}</span>
    </div>
    <div class="card-actions">
      <button class="btn-copy" onclick="copyFaq(this, ${f.num})">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copiar nº ${f.num}
      </button>
    </div>
  </div>`;
}

// ── Histórico de cópias recentes ──
function renderRecentCopies() {
  const wrap = document.getElementById("recentCopies");
  const list = document.getElementById("recentCopiesList");
  if (recentCopies.length === 0) {
    wrap.style.display = "none";
    return;
  }
  wrap.style.display = "flex";
  list.innerHTML = recentCopies.map(num =>
    `<span class="recent-copy-chip" onclick="copyFromChip(this, ${num})">#${num}</span>`
  ).join("");
}

function addRecentCopy(num) {
  recentCopies = recentCopies.filter(n => n !== num);
  recentCopies.unshift(num);
  recentCopies = recentCopies.slice(0, 5);
  localStorage.setItem("pitstop-recent", JSON.stringify(recentCopies));
  renderRecentCopies();
}

function copyFromChip(chip, num) {
  navigator.clipboard.writeText(String(num)).then(() => {
    const original = chip.textContent;
    chip.textContent = "Copiado!";
    setTimeout(() => { chip.textContent = original; }, 1200);
  });
  addRecentCopy(num);
}

// ── Copia APENAS o número do FAQ ──
function copyFaq(btn, num) {
  navigator.clipboard.writeText(String(num)).then(() => {
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copiado!`;
    btn.classList.add("copied");
    setTimeout(() => {
      btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar nº ${num}`;
      btn.classList.remove("copied");
    }, 2000);
    addRecentCopy(num);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value;
  document.getElementById("searchClear").classList.toggle("visible", searchTerm.length > 0);
  renderGrid();
});

document.getElementById("searchClear").addEventListener("click", clearSearch);

renderDropdown();
applyViewMode();
renderGrid();
renderRecentCopies();
