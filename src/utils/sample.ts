export const PROFILE: Term[] = [
  {
    term: "1A",
    season: "Fall",
    year: "2023",
    courses: [
      {
        antireqs: "MATH 145",
        code: "MATH 135",
        coreqs: "{}",
        description:
          "An introduction to the language of mathematics and proof techniques through a study of the basic algebraic systems of mathematics: the integers, the integers modulo n, the rational numbers, the real numbers, the complex numbers and polynomials.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs: "{}",
        requirements:
          "Prereq: 4U Calculus and Vectors or 4U Mathematics of Data Management; Honours Mathematics or Mathematics/BASE or Software Engineering students only. Antireq: MATH 145",
        termsOffered: [],
        title: "Algebra for Honours Mathematics",
        grade: "83",
      },
      {
        antireqs: "MATH 116,MATH 117,MATH 127,MATH 147",
        code: "MATH 137",
        coreqs: "{}",
        description:
          "Absolute values and inequalities. Sequences and their limits. Introduction to series. Limits of functions and continuity. The Intermediate Value theorem and approximate solutions to equations. Derivatives, linear approximation, and Newton's method. The Mean Value theorem and error bounds. Applications of the Mean Value theorem, Taylor polynomials and Taylor's theorem, Big-O notation. Suitable topics are illustrated using computer software.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs: "{}",
        requirements:
          "Prereq: 4U Calculus and Vectors. Antireq: MATH 116, 117, 127, 147",
        termsOffered: [],
        title: "Calculus 1 for Honours Mathematics",
        grade: "87",
      },
      {
        antireqs:
          "AE 121,BME 121,CS 115,CS 137,CS 138,CS 145,CIVE 121,ECE 150,ME 101,MSE 121,PHYS 236,SYDE 121",
        code: "CS 135",
        coreqs: "{}",
        description:
          "An introduction to the fundamentals of computer science through the application of elementary programming patterns in the functional style of programming. Syntax and semantics of a functional programming language. Tracing via substitution. Design, testing, and documentation. Linear and nonlinear data structures. Recursive data definitions. Abstraction and encapsulation. Generative and structural recursion. Historical context.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs: "{}",
        requirements:
          "Antireq: AE 121, BME 121, CS 115, 137, 138, 145, CIVE 121, ECE 150, ME 101, MSE 121, PHYS 236, SYDE 121",
        termsOffered: [],
        title: "Designing Functional Programs",
        grade: "83",
      },
      {
        antireqs: "",
        code: "ENGL 109",
        coreqs: "{}",
        description:
          "The course will explore a variety of issues in academic writing such as style, argument, and the presentation of information. Frequent written exercises will be required.",
        faculty: "ART",
        finalized: true,
        minLevel: "",
        prereqs: "{}",
        requirements: null,
        termsOffered: [],
        title: "Introduction to Academic Writing",
        grade: "78",
      },
      {
        antireqs: "ECON 100,COMM 103",
        code: "ECON 101",
        coreqs: "{}",
        description:
          "This course provides an introduction to microeconomic analysis relevant for understanding the Canadian economy. The behaviour of individual consumers and producers, the determination of market prices for commodities and resources, and the role of government policy in the functioning of the market system are the main topics covered.",
        faculty: "ART",
        finalized: true,
        minLevel: "",
        prereqs: "{}",
        requirements:
          "Prereq: Not open to Management Engineering students. Antireq: ECON 100/COMM 103",
        termsOffered: [],
        title: "Introduction to Microeconomics",
        grade: "92",
      },
    ],
  },
  {
    term: "1B",
    season: "Winter",
    year: "2024",
    courses: [
      {
        antireqs: "MATH 106,MATH 114,MATH 115,MATH 146,NE 112",
        code: "MATH 136",
        coreqs: "{}",
        description:
          "Systems of linear equations, matrix algebra, elementary matrices, computational issues. Real n-space, vector spaces and subspaces, basis and dimension, rank of a matrix, linear transformations, and matrix representations. Determinants, eigenvalues and diagonalization, applications.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "|", "operands": ["MATH 135 {60%}", "MATH 145"]}',
        requirements:
          "Prereq: (MATH 135 with a grade of at least 60% or MATH 145; Honours Mathematics or Mathematics/BASE students) or Science Mathematical Physics students. Antireq: MATH 106, 114, 115, 146, NE 112",
        termsOffered: [],
        title: "Linear Algebra 1 for Honours Mathematics",
        grade: "90",
      },
      {
        antireqs: "MATH 118,MATH 119,MATH 128,MATH 148",
        code: "MATH 138",
        coreqs: "{}",
        description:
          "Introduction to the Riemann integral and approximations. Antiderivatives and the fundamental theorem of calculus. Change of variables, methods of integration. Applications of the integral. Improper integrals. Linear and separable differential equations and applications. Tests for convergence for series. Binomial series, functions defined as power series and Taylor series. Vector (parametric) curves in R2. Suitable topics are illustrated using computer software.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "|", "operands": ["MATH 116", "MATH 117", "MATH 127 {70%}", "MATH 137 {60%}", "MATH 147"]}',
        requirements:
          "Prereq: (MATH 116 or 117 or 127 with a grade of at least 70%) or MATH 137 with a grade of at least 60% or MATH 147. Antireq: MATH 118, 119, 128, 148",
        termsOffered: [],
        title: "Calculus 2 for Honours Mathematics",
        grade: "81",
      },
      {
        antireqs: "CS 137,CS 138,CS 146,PHYS 239",
        code: "CS 136",
        coreqs: '{"operator": "", "operands": ["CS 136L"]}',
        description:
          "This course builds on the techniques and patterns learned in CS135 while making the transition to use an imperative language. It introduces the design and analysis of algorithms, the management of information, and the programming mechanisms and methodologies required in implementations. Topics discussed include iterative and recursive sorting algorithms; lists, stacks, queues, trees, and their application; abstract data types and their implementations.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "|", "operands": ["CS 145", "CS 115 {90%}", "CS 116 {70%}", "CS 135 {60%}"]}',
        requirements:
          "Prereq: One of CS 145, at least 90% in CS 115, at least 70% in CS 116, at least 60% in CS 135. Coreq: CS 136L. Antireq: CS 137, 138, 146, PHYS 239",
        termsOffered: [],
        title: "Elementary Algorithm Design and Data Abstraction",
        grade: "82",
      },
      {
        antireqs: "ENVS 195",
        code: "EARTH 122",
        coreqs: "{}",
        description:
          "This course presents a broad overview of earth system processes and their influence on humans. Course emphasis is placed on anthropogenic impacts on natural systems, the impacts of geologic, biologic, and atmospheric processes on humans, and the effects of human activities on the environment. Course topics include sustainable development and the availability and use of natural resources, principles of ecology and environmental science, biogeochemical cycles, climate and climate change, soils and food supply, energy systems, surface water and groundwater, waste generation and management, pollution, and catastrophic natural processes.",
        faculty: "SCI",
        finalized: true,
        minLevel: "",
        prereqs: "{}",
        requirements: "Antireq: ENVS 195",
        termsOffered: [],
        title: "Introductory Environmental Sciences",
        grade: "84",
      },
    ],
  },
  {
    term: "2A",
    season: "Fall",
    year: "2024",
    courses: [
      {
        antireqs: "MATH 225,MATH 245",
        code: "MATH 235",
        coreqs:
          '{"operator": "|", "operands": ["MATH 128", "MATH 138", "MATH 148"]}',
        description:
          "Orthogonal and unitary matrices and transformations. Orthogonal projections, Gram-Schmidt procedure, best approximations, least-squares. Inner products, angles and orthogonality, orthogonal diagonalization, singular value decomposition, applications.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "|", "operands": ["MATH 106 {70%}", "MATH 114 {70%}", "MATH 115 {70%}", "MATH 136 {60%}", "MATH 146"]}',
        requirements:
          "Prereq: (MATH 106 or 114 or 115 with a grade of at least 70%) or (MATH 136 with a grade of at least 60%) or MATH 146; Honours Mathematics or Mathematical Physics students. Coreq: MATH 128 or 138 or 148. Antireq: MATH 225, 245",
        termsOffered: [],
        title: "Linear Algebra 2 for Honours Mathematics",
        grade: "89",
      },
      {
        antireqs:
          "MATH 207,MATH 212,ECE 206,MATH 212N,MATH 217,MATH 227,MATH 247",
        code: "MATH 237",
        coreqs: "{}",
        description:
          "Calculus of functions of several variables. Limits, continuity, differentiability, the chain rule. The gradient vector and the directional derivative. Taylor's formula. Optimization problems. Mappings and the Jacobian. Multiple integrals in various co-ordinate systems.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "&", "operands": [{"operator": "|", "operands": ["MATH 106", "MATH 114", "MATH 115", "MATH 136", "MATH 146"]}, {"operator": "|", "operands": ["MATH 128 {70%}", "MATH 138 {60%}", "MATH 148"]}]}',
        requirements:
          "Prereq: (One of MATH 106, 114, 115, 136, 146) and (MATH 128 with at least 70% or MATH 138 with at least 60% or MATH 148); Honours Math or Math/Physics students. Antireq: MATH 207, 212/ECE 206, MATH 212N, 217, 227, 247",
        termsOffered: [],
        title: "Calculus 3 for Honours Mathematics",
        grade: "93",
      },
      {
        antireqs: "STAT 220,STAT 240",
        code: "STAT 230",
        coreqs: "{}",
        description:
          "This course provides an introduction to probability models including sample spaces, mutually exclusive and independent events, conditional probability and Bayes' Theorem. The named distributions (Discrete Uniform, Hypergeometric, Binomial, Negative Binomial, Geometric, Poisson, Continuous Uniform, Exponential, Normal (Gaussian), and Multinomial) are used to model real phenomena. Discrete and continuous univariate random variables and their distributions are discussed. Joint probability functions, marginal probability functions, and conditional probability functions of two or more discrete random variables and functions of random variables are also discussed. Students learn how to calculate and interpret means, variances and covariances particularly for the named distributions. The Central Limit Theorem is used to approximate probabilities.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "|", "operands": ["MATH 116 {80%}", "MATH 117 {80%}", "MATH 137 {80%}", "MATH 147 {80%}", "MATH 128 {60%}", "MATH 118", "MATH 119", "MATH 138", "MATH 148"]}',
        requirements:
          "Prereq: ((One of MATH 116, 117, 137, 147) with a minimum grade of 80%) or (MATH 128 with a minimum grade of 60%) or (one of MATH 118, 119, 138, 148); Honours Math or Math/Phys students only. Antireq: STAT 220, 240",
        termsOffered: [],
        title: "Probability",
        grade: "85",
      },
      {
        antireqs: "PMATH 330,ECE 208,SE 212",
        code: "CS 245",
        coreqs: "{}",
        description:
          "Logic as a tool for representation, reasoning, and computation. Propositional and predicate logic. Formalizing the notions of correct and incorrect reasoning, defining what is computable, and exploring the limits of computation. Godel's Incompleteness Theorem. Applications of logic to computer science.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "&", "operands": [{"operator": "|", "operands": ["CS 136", "CS 138", "CS 146"]}, {"operator": "|", "operands": ["MATH 135", "MATH 145"]}]}',
        requirements:
          "Prereq: (One of CS 136, 138, 146), (MATH 135 or MATH 145); Honours Mathematics students only. Antireq: PMATH 330, ECE 208, SE 212",
        termsOffered: [],
        title: "Logic and Computation",
        grade: "81",
      },
      {
        antireqs: "CS 246E,CS 247,MSE 342,SYDE 322",
        code: "CS 246",
        coreqs: "{}",
        description:
          "Introduction to object-oriented programming and to tools and techniques for software development. Designing, coding, debugging, testing, and documenting medium-sized programs: reading specifications and designing software to implement them; selecting appropriate data structures and control structures; writing reusable code; reusing existing code; basic performance issues; debuggers; test suites.",
        faculty: "MAT",
        finalized: true,
        minLevel: "",
        prereqs:
          '{"operator": "|", "operands": [{"operator": "&", "operands": ["CS 146", "CS 136L"]}, "CS 138 {60%}", {"operator": "&", "operands": ["CS 136L", "CS 136 {60%}"]}]}',
        requirements:
          "Prereq: (CS 146 and CS 136L) or (a grade of 60% or higher in CS 138) or (CS 136L and a grade of 60% or higher in CS 136); Honours Mathematics students only. Antireq: CS 246E, CS  247, MSE 342, SYDE 322",
        termsOffered: [],
        title: "Object-Oriented Software Development",
        grade: "85",
      },
    ],
  },
];

export const CS246: GradeCourse = {
  antireqs: "CS 246E,CS 247,MSE 342,SYDE 322",
  code: "CS 246",
  coreqs: "{}",
  description:
    "Introduction to object-oriented programming and to tools and techniques for software development. Designing, coding, debugging, testing, and documenting medium-sized programs: reading specifications and designing software to implement them; selecting appropriate data structures and control structures; writing reusable code; reusing existing code; basic performance issues; debuggers; test suites.",
  faculty: "MAT",
  finalized: true,
  minLevel: "",
  prereqs:
    '{"operator": "|", "operands": [{"operator": "&", "operands": ["CS 146", "CS 136L"]}, "CS 138 {60%}", {"operator": "&", "operands": ["CS 136L", "CS 136 {60%}"]}]}',
  requirements:
    "Prereq: (CS 146 and CS 136L) or (a grade of 60% or higher in CS 138) or (CS 136L and a grade of 60% or higher in CS 136); Honours Mathematics students only. Antireq: CS 246E, CS  247, MSE 342, SYDE 322",
  termsOffered: [],
  title: "Object-Oriented Software Development",
  grade: "85",
};

export const CS136 = {
  antireqs: "CS 137,CS 138,CS 146,PHYS 239",
  code: "CS 136",
  coreqs: '{"operator": "", "operands": ["CS 136L"]}',
  description:
    "This course builds on the techniques and patterns learned in CS135 while making the transition to use an imperative language. It introduces the design and analysis of algorithms, the management of information, and the programming mechanisms and methodologies required in implementations. Topics discussed include iterative and recursive sorting algorithms; lists, stacks, queues, trees, and their application; abstract data types and their implementations.",
  faculty: "MAT",
  finalized: true,
  minLevel: "",
  prereqs:
    '{"operator": "|", "operands": ["CS 145", "CS 115 {90%}", "CS 116 {70%}", "CS 135 {60%}"]}',
  requirements:
    "Prereq: One of CS 145, at least 90% in CS 115, at least 70% in CS 116, at least 60% in CS 135. Coreq: CS 136L. Antireq: CS 137, 138, 146, PHYS 239",
  termsOffered: [],
  title: "Elementary Algorithm Design and Data Abstraction",
  grade: "82",
};

export const ECON101 = {
  antireqs: "ECON 100,COMM 103",
  code: "ECON 101",
  coreqs: "{}",
  description:
    "This course provides an introduction to microeconomic analysis relevant for understanding the Canadian economy. The behaviour of individual consumers and producers, the determination of market prices for commodities and resources, and the role of government policy in the functioning of the market system are the main topics covered.",
  faculty: "ART",
  finalized: true,
  minLevel: "",
  prereqs: "{}",
  requirements:
    "Prereq: Not open to Management Engineering students. Antireq: ECON 100/COMM 103",
  termsOffered: [],
  title: "Introduction to Microeconomics",
  grade: "92",
};
