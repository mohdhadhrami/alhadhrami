const molecules = {
  H2O: {
    name: "H2O",
    geometry: "منحني (Bent)",
    polarity: "قطبي",
    note: "روابط O–H قطبية والشكل المنحني يمنع تعادل العزوم، فينتج عزم كلي.",
    netDipoleText: "العزم يتجه نحو الأكسجين (جهة السالبية الأعلى).",
    xyz: `3
H2O
O 0.000 0.000 0.000
H 0.957 0.000 0.000
H -0.239 0.927 0.000`,
    bondDipoles: [
      { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: 0.6, y: 0.0, z: 0.0 } },
      { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: -0.2, y: 0.6, z: 0.0 } }
    ],
    netDipole: { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: 0.2, y: 0.4, z: 0.0 } }
  },
  CO2: {
    name: "CO2",
    geometry: "خطي (Linear)",
    polarity: "غير قطبي",
    note: "على الرغم من أن روابط C=O قطبية، إلا أن الشكل الخطي متماثل فيلغي العزوم.",
    netDipoleText: "العزوم متساوية ومتعاكسة → المحصلة صفر.",
    xyz: `3
CO2
O -1.160 0.000 0.000
C 0.000 0.000 0.000
O 1.160 0.000 0.000`,
    bondDipoles: [
      { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: -0.8, y: 0.0, z: 0.0 } },
      { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: 0.8, y: 0.0, z: 0.0 } }
    ],
    netDipole: null
  },
  NH3: {
    name: "NH3",
    geometry: "هرمي ثلاثي (Trigonal pyramidal)",
    polarity: "قطبي",
    note: "زوج إلكتروني غير رابط يسبب شكلًا هرميًا غير متماثل → عزم كلي واضح.",
    netDipoleText: "العزم يتجه نحو ذرة النيتروجين.",
    xyz: `4
NH3
N 0.000 0.000 0.200
H 0.940 0.000 -0.200
H -0.470 0.814 -0.200
H -0.470 -0.814 -0.200`,
    bondDipoles: [
      { start: { x: 0.0, y: 0.0, z: 0.2 }, end: { x: 0.55, y: 0.0, z: 0.0 } },
      { start: { x: 0.0, y: 0.0, z: 0.2 }, end: { x: -0.3, y: 0.5, z: 0.0 } },
      { start: { x: 0.0, y: 0.0, z: 0.2 }, end: { x: -0.3, y: -0.5, z: 0.0 } }
    ],
    netDipole: { start: { x: 0.0, y: 0.0, z: -0.1 }, end: { x: 0.0, y: 0.0, z: 0.8 } }
  },
  CH4: {
    name: "CH4",
    geometry: "رباعي سطوح (Tetrahedral)",
    polarity: "غير قطبي",
    note: "روابط C–H ضعيفة القطبية والشكل رباعي السطوح متماثل.",
    netDipoleText: "تماثل الاتجاهات يلغي العزم الكلي.",
    xyz: `5
CH4
C 0.000 0.000 0.000
H 0.629 0.629 0.629
H -0.629 -0.629 0.629
H -0.629 0.629 -0.629
H 0.629 -0.629 -0.629`,
    bondDipoles: [
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0.4, y: 0.4, z: 0.4 } },
      { start: { x: 0, y: 0, z: 0 }, end: { x: -0.4, y: -0.4, z: 0.4 } },
      { start: { x: 0, y: 0, z: 0 }, end: { x: -0.4, y: 0.4, z: -0.4 } },
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0.4, y: -0.4, z: -0.4 } }
    ],
    netDipole: null
  },
  H2S: {
    name: "H2S",
    geometry: "منحني (Bent)",
    polarity: "قطبي",
    note: "الشكل المنحني يجعل عزوم روابط S–H غير متعاكسة تمامًا.",
    netDipoleText: "العزم يتجه نحو الكبريت.",
    xyz: `3
H2S
S 0.000 0.000 0.000
H 1.340 0.000 0.000
H -0.270 1.120 0.000`,
    bondDipoles: [
      { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: 0.8, y: 0.0, z: 0.0 } },
      { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: -0.2, y: 0.7, z: 0.0 } }
    ],
    netDipole: { start: { x: 0.0, y: 0.0, z: 0.0 }, end: { x: 0.3, y: 0.3, z: 0.0 } }
  },
  BF3: {
    name: "BF3",
    geometry: "مثلثي مستوٍ (Trigonal planar)",
    polarity: "غير قطبي",
    note: "الروابط قطبية لكن الشكل المثلثي المستوي متماثل.",
    netDipoleText: "محصلة العزوم تساوي صفر.",
    xyz: `4
BF3
B 0.000 0.000 0.000
F 1.300 0.000 0.000
F -0.650 1.125 0.000
F -0.650 -1.125 0.000`,
    bondDipoles: [
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0.8, y: 0, z: 0 } },
      { start: { x: 0, y: 0, z: 0 }, end: { x: -0.4, y: 0.7, z: 0 } },
      { start: { x: 0, y: 0, z: 0 }, end: { x: -0.4, y: -0.7, z: 0 } }
    ],
    netDipole: null
  },
  SO2: {
    name: "SO2",
    geometry: "منحني (Bent)",
    polarity: "قطبي",
    note: "وجود رابطتين قطبيتين وشكل منحني يعطي عزمًا كليًا.",
    netDipoleText: "العزم يتجه نحو ذرات الأكسجين.",
    xyz: `3
SO2
S 0.000 0.000 0.000
O 1.430 0.000 0.000
O -0.460 1.380 0.000`,
    bondDipoles: [
      { start: { x: 0, y: 0, z: 0 }, end: { x: 0.9, y: 0, z: 0 } },
      { start: { x: 0, y: 0, z: 0 }, end: { x: -0.3, y: 0.8, z: 0 } }
    ],
    netDipole: { start: { x: 0, y: 0, z: 0 }, end: { x: 0.3, y: 0.4, z: 0 } }
  },
  NF3: {
    name: "NF3",
    geometry: "هرمي ثلاثي (Trigonal pyramidal)",
    polarity: "قطبي",
    note: "الشكل هرمي غير متماثل، فتنتج محصلة صغيرة للعزوم.",
    netDipoleText: "العزم الكلي صغير لكنه غير صفري.",
    xyz: `4
NF3
N 0.000 0.000 0.200
F 1.200 0.000 -0.200
F -0.600 1.040 -0.200
F -0.600 -1.040 -0.200`,
    bondDipoles: [
      { start: { x: 0, y: 0, z: 0.2 }, end: { x: 0.7, y: 0, z: 0 } },
      { start: { x: 0, y: 0, z: 0.2 }, end: { x: -0.4, y: 0.6, z: 0 } },
      { start: { x: 0, y: 0, z: 0.2 }, end: { x: -0.4, y: -0.6, z: 0 } }
    ],
    netDipole: { start: { x: 0, y: 0, z: -0.1 }, end: { x: 0, y: 0, z: 0.6 } }
  }
};

const state = {
  showBondDipoles: true,
  showNetDipole: true,
  showGeometry: true,
  currentMolecule: "H2O",
  mainViewer: null,
  compareViewers: {}
};

const stepSections = Array.from(document.querySelectorAll(".step"));
const stepperList = document.getElementById("stepperList");
const progressBar = document.getElementById("progressBar");
const progressValue = document.getElementById("progressValue");

function buildStepper() {
  stepSections.forEach((section) => {
    const stepNumber = section.dataset.step;
    const title = section.querySelector("h2").textContent;
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.href = `#step-${stepNumber}`;
    link.textContent = title.replace("الخطوة", "خطوة");
    link.dataset.step = stepNumber;
    item.appendChild(link);
    stepperList.appendChild(item);
  });
}

function updateProgress(activeIndex) {
  const percent = Math.round(((activeIndex + 1) / stepSections.length) * 100);
  progressBar.style.width = `${percent}%`;
  progressValue.textContent = `${percent}%`;
}

function observeSteps() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const step = entry.target.dataset.step;
          document.querySelectorAll(".stepper a").forEach((link, index) => {
            const isActive = link.dataset.step === step;
            link.classList.toggle("active", isActive);
            if (isActive) {
              updateProgress(index);
            }
          });
        }
      });
    },
    { threshold: 0.4 }
  );

  stepSections.forEach((section) => observer.observe(section));
}

function createViewer(containerId) {
  const element = document.getElementById(containerId);
  return $3Dmol.createViewer(element, { backgroundColor: "#ffffff" });
}

function renderMolecule(viewer, moleculeId, options = {}) {
  const molecule = molecules[moleculeId];
  viewer.removeAllModels();
  viewer.removeAllShapes();
  viewer.addModel(molecule.xyz, "xyz");
  viewer.setStyle({}, { stick: { radius: 0.18 }, sphere: { scale: 0.28 } });

  if (options.showBondDipoles && molecule.bondDipoles) {
    molecule.bondDipoles.forEach((dipole) => {
      viewer.addArrow({
        start: dipole.start,
        end: dipole.end,
        radius: 0.12,
        color: "#e63946",
        opacity: 0.9
      });
    });
  }

  if (options.showNetDipole && molecule.netDipole) {
    viewer.addArrow({
      start: molecule.netDipole.start,
      end: molecule.netDipole.end,
      radius: 0.18,
      color: "#1d3557",
      opacity: 0.95
    });
  }

  viewer.zoomTo();
  viewer.render();
}

function updateInfoCards(moleculeId) {
  const molecule = molecules[moleculeId];
  document.getElementById("geometryName").textContent = molecule.geometry;
  document.getElementById("polarityNote").textContent = molecule.note;
  document.getElementById("netDipoleText").textContent = molecule.netDipoleText;
  document.getElementById("geometryName").parentElement.style.display = state.showGeometry
    ? "block"
    : "none";
}

function setupMainViewer() {
  state.mainViewer = createViewer("mainViewer");
  renderMolecule(state.mainViewer, state.currentMolecule, {
    showBondDipoles: state.showBondDipoles,
    showNetDipole: state.showNetDipole
  });
  updateInfoCards(state.currentMolecule);
}

function setupCompareViewers() {
  state.compareViewers = {
    H2O: createViewer("compareH2O"),
    CO2: createViewer("compareCO2")
  };
  updateCompareDipoles(true);
}

function updateCompareDipoles(showDipoles) {
  renderMolecule(state.compareViewers.H2O, "H2O", {
    showBondDipoles: showDipoles,
    showNetDipole: showDipoles
  });
  renderMolecule(state.compareViewers.CO2, "CO2", {
    showBondDipoles: showDipoles,
    showNetDipole: false
  });
}

function bindControls() {
  const moleculeSelect = document.getElementById("moleculeSelect");
  moleculeSelect.addEventListener("change", (event) => {
    state.currentMolecule = event.target.value;
    renderMolecule(state.mainViewer, state.currentMolecule, {
      showBondDipoles: state.showBondDipoles,
      showNetDipole: state.showNetDipole
    });
    updateInfoCards(state.currentMolecule);
  });

  const bondToggle = document.getElementById("bondDipoleToggle");
  const netToggle = document.getElementById("netDipoleToggle");
  const geometryToggle = document.getElementById("geometryToggle");

  bondToggle.addEventListener("change", (event) => {
    state.showBondDipoles = event.target.checked;
    renderMolecule(state.mainViewer, state.currentMolecule, {
      showBondDipoles: state.showBondDipoles,
      showNetDipole: state.showNetDipole
    });
  });

  netToggle.addEventListener("change", (event) => {
    state.showNetDipole = event.target.checked;
    renderMolecule(state.mainViewer, state.currentMolecule, {
      showBondDipoles: state.showBondDipoles,
      showNetDipole: state.showNetDipole
    });
  });

  geometryToggle.addEventListener("change", (event) => {
    state.showGeometry = event.target.checked;
    updateInfoCards(state.currentMolecule);
  });

  document.getElementById("compareDipoles").addEventListener("change", (event) => {
    updateCompareDipoles(event.target.checked);
  });

  document.getElementById("screenshotBtn").addEventListener("click", () => {
    const dataUrl = state.mainViewer.pngURI();
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${state.currentMolecule}-snapshot.png`;
    document.body.appendChild(link);
    link.click();
    link.remove();
  });

  document.getElementById("fullscreenBtn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });

  document.getElementById("resetViewBtn").addEventListener("click", () => {
    state.mainViewer.zoomTo();
    state.mainViewer.render();
  });
}

function setupQuickQuestions() {
  const answerKey = {
    electro: {
      correct: "B",
      feedback: "أحسنت! زيادة فرق السالبية تزيد قطبية الرابطة.",
      incorrect: "حاول مجددًا: فرق السالبية الأكبر يعني رابطة أكثر قطبية."
    },
    nh3: {
      correct: "B",
      feedback: "صحيح! الشكل الهرمي غير المتماثل يجعل NH3 قطبيًا.",
      incorrect: "راجع الشكل الهندسي وتأثيره على محصلة العزوم."
    },
    solubility: {
      correct: "A",
      feedback: "صحيح! زيت غير قطبي والماء قطبي فلا يمتزجان.",
      incorrect: "تذكّر قاعدة المثل يذيب المثل."
    },
    nf3: {
      correct: "B",
      feedback: "إجابة صحيحة! NF3 هرمي وغير متماثل لذا هو قطبي.",
      incorrect: "تذكّر تأثير الشكل الهرمي على العزم الكلي."
    }
  };

  document.querySelectorAll(".quick-question").forEach((card) => {
    const questionId = card.dataset.question;
    const feedback = card.querySelector(".feedback");
    const locked = card.dataset.locked === "true";

    card.querySelectorAll("button").forEach((button) => {
      if (locked) {
        button.disabled = true;
      }
      button.addEventListener("click", () => {
        const isCorrect = button.dataset.answer === answerKey[questionId].correct;
        card.querySelectorAll("button").forEach((btn) => {
          btn.classList.remove("correct", "incorrect");
          btn.disabled = true;
        });
        button.classList.add(isCorrect ? "correct" : "incorrect");
        feedback.textContent = isCorrect ? answerKey[questionId].feedback : answerKey[questionId].incorrect;
        feedback.style.color = isCorrect ? "var(--success)" : "var(--danger)";
      });
    });
  });
}

function setupTasks() {
  const taskChecks = document.querySelectorAll(".task-check");
  const completeBtn = document.getElementById("completeTasksBtn");
  const nh3Question = document.querySelector(".quick-question[data-question='nh3']");

  function updateButtonState() {
    const allChecked = Array.from(taskChecks).every((check) => check.checked);
    completeBtn.disabled = !allChecked;
  }

  taskChecks.forEach((check) => check.addEventListener("change", updateButtonState));

  completeBtn.addEventListener("click", () => {
    nh3Question.dataset.locked = "false";
    nh3Question.querySelectorAll("button").forEach((btn) => {
      btn.disabled = false;
    });
    nh3Question.querySelector(".feedback").textContent = "الآن يمكنك الإجابة.";
    document.getElementById("moleculeSelect").value = "NH3";
    state.currentMolecule = "NH3";
    renderMolecule(state.mainViewer, "NH3", {
      showBondDipoles: state.showBondDipoles,
      showNetDipole: state.showNetDipole
    });
    updateInfoCards("NH3");
  });
}

function setupWorksheet() {
  const table = document.getElementById("worksheetTable");
  const status = document.getElementById("worksheetStatus");
  const storageKey = "worksheetAnswers";

  const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
  if (saved.length) {
    Array.from(table.tBodies[0].rows).forEach((row, index) => {
      const inputs = row.querySelectorAll("input");
      inputs.forEach((input) => {
        const field = input.dataset.field;
        if (saved[index] && saved[index][field]) {
          input.value = saved[index][field];
        }
      });
    });
    status.textContent = "تم تحميل الإجابات المحفوظة.";
  }

  document.getElementById("saveWorksheetBtn").addEventListener("click", () => {
    const rows = Array.from(table.tBodies[0].rows).map((row) => {
      const rowData = {};
      row.querySelectorAll("input").forEach((input) => {
        rowData[input.dataset.field] = input.value.trim();
      });
      return rowData;
    });
    localStorage.setItem(storageKey, JSON.stringify(rows));
    status.textContent = "تم حفظ إجابات المجموعة محليًا.";
  });

  document.getElementById("printWorksheetBtn").addEventListener("click", () => {
    window.print();
  });
}

buildStepper();
observeSteps();
setupMainViewer();
setupCompareViewers();
bindControls();
setupQuickQuestions();
setupTasks();
setupWorksheet();
