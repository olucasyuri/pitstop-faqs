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
  { num: 7463, title: "PIT STOP - Registro de Ligações", cat: "PIT STOP", cls: "Registro de Ligações", link: "https://helptools.softcomsistemas.com.br/core/promover/detalhe/id/7463" },

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
};

// ── Build category list ──
const allCats = ["Todos", ...new Set(faqs.map(f => f.cat))];
let activeFilter = "Todos";
let searchTerm = "";

function clsClass(cls) {
  const l = cls.toLowerCase();
  if (l.includes("análise") || l.includes("erro") || l.includes("analise")) return "cls-analise";
  if (l.includes("treinamento") || l.includes("dúvida") || l.includes("duvida") || l.includes("liberação") || l.includes("liberacao")) return "cls-treinamento";
  if (l.includes("config") || l.includes("configuração")) return "cls-config";
  if (l.includes("instalação") || l.includes("instalacao") || l.includes("instação")) return "cls-instalacao";
  if (l.includes("registro") || l.includes("operacional")) return "cls-operacional";
  return "cls-outros";
}

function barClass(cat) {
  return barClassMap[cat] || "bar-default";
}

function renderDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.innerHTML = "";
  allCats.forEach(cat => {
    const item = document.createElement("div");
    item.className = "dropdown-item" + (cat === activeFilter ? " active" : "");
    item.textContent = cat;
    item.onclick = () => {
      activeFilter = cat;
      document.getElementById("dropdownLabel").textContent = cat;
      closeDropdown();
      renderDropdown();
      renderGrid();
    };
    menu.appendChild(item);
  });
}

function toggleDropdown() {
  const trigger = document.getElementById("dropdownTrigger");
  const menu = document.getElementById("dropdownMenu");
  const isOpen = menu.classList.contains("open");
  if (isOpen) { closeDropdown(); } else {
    trigger.classList.add("open");
    menu.classList.add("open");
  }
}

function closeDropdown() {
  document.getElementById("dropdownTrigger").classList.remove("open");
  document.getElementById("dropdownMenu").classList.remove("open");
}

document.addEventListener("click", e => {
  if (!document.getElementById("dropdownWrap").contains(e.target)) closeDropdown();
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
    grid.innerHTML = `<div class="empty-state">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      <h3>Nenhum FAQ encontrado</h3>
      <p>Tente ajustar a busca ou o filtro de categoria.</p>
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

function cardHTML(f, i) {
  const delay = Math.min(i * 0.04, 0.4);
  return `
  <div class="faq-card ${barClass(f.cat)}" style="animation-delay:${delay}s">
    <div class="card-top">
      <span class="faq-num">#${f.num}</span>
      <span class="faq-class-tag ${clsClass(f.cls)}">${f.cls}</span>
    </div>
    <div class="faq-title">${f.title}</div>
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

// ── Copia APENAS o número do FAQ ──
function copyFaq(btn, num) {
  navigator.clipboard.writeText(String(num)).then(() => {
    btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copiado!`;
    btn.classList.add("copied");
    setTimeout(() => {
      btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copiar nº ${num}`;
      btn.classList.remove("copied");
    }, 2000);
  });
}

document.getElementById("searchInput").addEventListener("input", e => {
  searchTerm = e.target.value;
  renderGrid();
});

renderDropdown();
renderGrid();
