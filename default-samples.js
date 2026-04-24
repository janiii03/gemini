const DEFAULT_SAMPLES = [
  {
    question: 'What is "Generative AI"?',
    answer:
      "A type of AI that can create new and original content, such as text, images, or music.",
  },
  {
    question:
      "What specific type of AI refers to a system which can create new types of content, such as text, images, or video?",
    answer: "Generative AI",
  },
  {
    question:
      "A \"Large Language Model\" (LLM) is a type of AI trained on huge amounts of data. It works by predicting the next word (or 'token') in a sequence, which allows it to understand and produce content.",
    answer: "True",
  },
  {
    question:
      "The primary difference between Generative AI and other forms of AI (such as classification models) is simply the size of the dataset; both perform the same fundamental tasks.",
    answer:
      "False - This is a difference in function, not just dataset size. Traditional AI models are often discriminative; Generative AI is creative.",
  },
  {
    question:
      "When AI chatbots generate false, nonsensical or misleading outputs that seem believable, these errors are referred to as what?",
    answer: "Hallucinations",
  },
  {
    question:
      'Which of the following explanations for why AI "hallucination" occurs is the most accurate?',
    answer:
      "Hallucinations are an inherent risk of Large Language Models, which are designed to predict the next most probabilistically plausible word in a sequence, not to query a database of verified facts.",
  },
  {
    question:
      "A danger of AI hallucinations in academic research is their plausibility; they are often syntactically correct, contextually coherent, and confidently presented, making them difficult to detect without independent verification.",
    answer: "True",
  },
  {
    question:
      "A student uses Gemini to find sources for a history paper. The AI generates a response that includes a detailed, plausible-sounding, and perfectly formatted citation for a journal article that does not exist. This error should be categorized as:",
    answer: "A hallucination",
  },
  {
    question:
      "When an AI system shows a tendency to produce results that are systematically prejudiced due to the data it was trained on, this is known as:",
    answer: "Bias",
  },
  {
    question:
      "A student uses Gemini to research historical events. They notice that the AI's responses consistently emphasize perspectives from certain countries while minimizing contributions from other regions. This is a direct example of which key ethical principle?",
    answer: "Algorithmic Bias",
  },
  {
    question:
      'True or False: Open-source AI models are, by definition, fully transparent, meaning faculty can easily understand the exact reason for any specific output, such as a "hallucination."',
    answer: "False",
  },
  {
    question:
      "Which of the following are examples of where AI is used within Google? (Select all which apply)",
    answer: [
      "Gmail, used for filtering spam and recommending replies.",
      "Google Search, which uses algorithms to match queries to web pages",
      "Google Maps, which optimizes routes using real-time traffic data",
    ],
  },
  {
    question: "Your recent chats can be saved in Gemini?",
    answer: "True",
  },
  {
    question: "You can listen to a response in Gemini for Education?",
    answer: "True",
  },
  {
    question: "You can create an image using Gemini",
    answer: "True",
  },
  {
    question: "Which of the following tools are available in Gemini?",
    answer: [
      "Guided Learning - Learn and Understand Topics",
      "Canvas - Create Docs and Apps",
      "Create image - Generate images",
    ],
  },
  {
    question:
      "Which of the following can be accessed in the side menu of Gemini?",
    answer: ["Gems", "New Chat", "Recent Chats"],
  },
  {
    question:
      "Which of these statements best describes Guided Learning in Gemini?",
    answer:
      "Guided Learning allows you to dive deeper into a topic, using open-ended questions to create a learning discussion.",
  },
  {
    question: "What task does Deep Research in Gemini perform?",
    answer:
      "Browse websites, think through the findings, and create multi-page reports",
  },
  {
    question:
      "Which of the following features is primarily designed to help create multi-page reports?",
    answer: "Deep Research",
  },
  {
    question: "Which of the following describes a Gem?",
    answer:
      "Gems let you save detailed prompt instructions for your most repeatable tasks so you can save time using Gemini.",
  },
  {
    question: "You can upload your own files to a Gem",
    answer: "True",
  },
  {
    question:
      'When training a Gem, what is the relationship between the "Instructions" field and the "Knowledge" field?',
    answer:
      'The "Instructions" field must explicitly direct the Gem on how and when to use the files uploaded to the "Knowledge" field.',
  },
  {
    question:
      "What is the pedagogical advantage of using a Gem over a standard Gemini chat?",
    answer:
      "A Gem is designed to follow the same pedagogical framework, persona, and constraints every time it is invoked.",
  },
  {
    question:
      "Which Gemini-related tool allows users to save detailed prompt instructions for repeatable tasks, effectively creating custom AI assistants?",
    answer: "Gems",
  },
  {
    question:
      "Gemini's Canvas feature can be used for tasks like generating working computer code from an idea or creating interactive infographics.",
    answer: "True",
  },
  {
    question: "Which of the following can be completed with Canvas in Gemini?",
    answer: [
      "Create custom quizzes",
      "Create HTML Websites",
      "Create interactive infographics",
    ],
  },
  {
    question:
      "A professor wants to generate a static image to begin their lecture. Which specific Gemini tool is designed for this task?",
    answer: "Create Image",
  },
  {
    question:
      "Which of the following describes how Create images works within Gemini?",
    answer: "It generates images from text prompts.",
  },
  {
    question:
      "Which of the following describes how Imagen works within Gemini?",
    answer: [
      "It generates images from text prompts.",
      "It can edit existing images.",
    ],
  },
  {
    question:
      "A biology professor wants to generate a new, high-quality, 30-second video clip. Which Gemini tool?",
    answer: "Veo",
  },
  {
    question:
      'After generating an output, what does the "Sources" button in Gemini do?',
    answer: "Shows the websites used to create the content.",
  },
  {
    question:
      "What does the 'Double Check Response' feature in Gemini allow you to do?",
    answer: "Explore the data sources for the answer from the web.",
  },
  {
    question:
      'What does the "Share and Export" button in Gemini allow you to do? (Select all which apply)',
    answer: ["Export to Docs", "Draft in Gmail"],
  },
  {
    question:
      "When accessing Gemini for academic purposes, which interface element signifies that the user is operating within a Google Workspace for Education environment?",
    answer:
      'The presence of the "Dasher Badge" (often appearing as a shield icon).',
  },
  {
    question: "Which of the following methods can be used to open NotebookLM?",
    answer: [
      "Head to notebooklm.google.com in the Omnibox",
      "Head to the NotebookLM Icon in the Apps Launcher",
      "In Google Drive, Select New and then Notebook",
    ],
  },
  {
    question: "You can upload an MP3 file to NotebookLM",
    answer: "True",
  },
  {
    question: "Which of the following data sources can be used in NotebookLM?",
    answer: ["Web Pages", "Google Docs", "Copied Text"],
  },
  {
    question:
      "You can share your Notebooks from NotebookLM with other users in your organisation.",
    answer: "True",
  },
  {
    question:
      "You can customize the Audio Overview in NotebookLM to make the length shorter or longer.",
    answer: "True",
  },
  {
    question:
      "Audio Overviews in NotebookLM can be downloaded for use outside of the notebook.",
    answer: "True",
  },
  {
    question: "Which of the following can be created in NotebookLM?",
    answer: ["Audio Overview", "Video Overview", "Mind Map"],
  },
  {
    question:
      "The Discover Tool in NotebookLM will find additional data sources for your notebook.",
    answer: "True",
  },
  {
    question:
      "An educator is starting a large research project with dozens of articles and notes. How would NotebookLM be most beneficial in the initial stages?",
    answer:
      "By synthesizing information across all uploaded documents to help them find connections and draft an outline.",
  },
  {
    question:
      "An educator wants to get a quick, audible summary of a lengthy research paper while multitasking. Which feature should they use?",
    answer: "Audio Overview",
  },
  {
    question:
      "An educator has several PDF articles related to a new research topic. They need to quickly understand the main points. Which method is most efficient?",
    answer:
      "Upload the PDF articles to NotebookLM, and ask it to generate summaries and identify key topics.",
  },
  {
    question:
      "A student has a large, complex research paper and needs to quickly identify the main arguments. Which Gemini feature would be most useful?",
    answer:
      "NotebookLM, to summarize the document and create a study guide based on its content.",
  },
  {
    question:
      "An educator wants to create a study guide for their students based on their uploaded lesson notes. How can NotebookLM help?",
    answer:
      "Upload the lesson notes to NotebookLM and prompt it to create a study guide based on the uploaded source.",
  },
  {
    question:
      "A teacher uploads an article on the lifecycle of a butterfly to NotebookLM. To help understand key terms, what is the most effective use?",
    answer:
      'Ask to "Generate a list of 5 key vocabulary words from the article and provide their definitions in simple terms"',
  },
  {
    question:
      "An English teacher wants to help students with different reading abilities understand a story in NotebookLM. What is the best way to support all learners?",
    answer:
      "Ask NotebookLM to generate multiple summaries of the story, each tailored to a different reading level.",
  },
  {
    question:
      "A new sports coach uploads the team's playbook and last season's game summaries to NotebookLM. What is the most effective way to prepare for the new season?",
    answer:
      "Asking it to 'Identify which plays from the playbook were most successful according to the game summaries.'",
  },
  {
    question:
      "An educator has uploaded articles to NotebookLM. They want to explore various project formats. How can NotebookLM help?",
    answer:
      "Use NotebookLM's chat feature to ask it for different potential project formats based on the content from the uploaded sources.",
  },
  {
    question:
      "A parent sends an email with specific questions about BYOD policy. Teacher uploads policy to NotebookLM. What is the most efficient way?",
    answer:
      'Ask it to "Create an FAQ based on the source that directly answers the parent\'s list of specific questions."',
  },
  {
    question:
      "A student uploaded 5 PDFs on the Renaissance. They need to understand how artists, patrons, and city-states are interconnected. Which feature is most useful?",
    answer:
      "Using the Mind Map feature in NotebookLM to automatically visualize connections across all five sources at once",
  },
  {
    question:
      "A student is working on a research project with many scattered notes. How can NotebookLM assist in organizing and understanding complex topics?",
    answer:
      "By synthesizing information across uploaded documents, generating study guides, creating mind maps, or producing audio overviews from the notes.",
  },
  {
    question:
      'When a student uploads a source into NotebookLM, what is the primary benefit of the AI\'s response being "grounded" in the provided information?',
    answer:
      "The AI's response will provide clear citations from the uploaded sources, ensuring the answer is based only on the provided material.",
  },
  {
    question:
      "How do NotebookLM's features support helping students explore and understand complex source material compared to traditional re-reading?",
    answer: [
      "They transform the static text into an interactive source that can be queried.",
      "They transform the content into different modalities.",
      "They provide an immediate scaffold by automatically synthesizing key themes and argument structures.",
    ],
  },
  {
    question:
      "An educator uses a generative AI tool to help create a first draft of a lesson plan. What is the most critical next step?",
    answer:
      "Use their professional judgment to review, edit, and adapt the AI's output to align with curriculum standards and their specific students' needs.",
  },
  {
    question:
      "An educator is looking to adapt some text for use by students with a lower reading level. Which method could they use?",
    answer:
      "Start a new chat in Gemini. Paste the text and add a prompt, asking Gemini to reduce the reading level.",
  },
  {
    question:
      "How can an educator utilize Gemini to generate a creative writing prompt for a poetry unit aimed at high school students?",
    answer:
      "Input a prompt in Gemini requesting a unique, imaginative, or thought-provoking poetry prompt, specifying the grade level and desired theme.",
  },
  {
    question:
      "An educator is looking for practical strategies to increase student leadership and independence. How can they use Gemini?",
    answer:
      "Upload a PDF of your current curriculum and ask Gemini to suggest student leadership opportunities based around the content.",
  },
  {
    question:
      "A teacher planning a renewable energy unit. How to use Gemini as a thought partner?",
    answer:
      "Enter a prompt in Gemini describing the unit topic and grade level, and ask it to generate lesson ideas and activities",
  },
  {
    question:
      "An educator wants to generate a vocabulary list. Which option would NOT help?",
    answer:
      "Use audio overviews to create a podcast that introduces the new topic.",
  },
  {
    question:
      "A science teacher wants to create an interactive activity on density. Best approach?",
    answer:
      "Ask Gemini to create a web-based application with Canvas that allows students to adjust mass and volume.",
  },
  {
    question:
      "A teacher wants students to use Guided Learning mode to learn about photosynthesis. Most suitable method?",
    answer: "Share a direct Guided Learning link into Google Classroom.",
  },
  {
    question:
      "How can an educator use Gemini's 'Gems' feature to save time on repetitive lesson plan variations?",
    answer:
      "Create a custom 'Gem' in Gemini with pre-set instructions and context for generating lesson plan variations.",
  },
  {
    question:
      "An administrator needs to draft a job description. Best approach using Gemini?",
    answer:
      "Enter a prompt in Gemini, acting as an Education HR specialist, requesting a job description with required skills and experience.",
  },
  {
    question:
      "An educator needs to create quiz questions about the American Revolution. How to use Gemini?",
    answer:
      "Enter a prompt in Gemini specifying the topic, grade level, and requesting quiz questions to check for understanding.",
  },
  {
    question:
      "A teacher needs to create a rubric for a 5-minute oral presentation on reducing waste. Best prompt?",
    answer:
      "Act as a Humanities teacher with expertise in writing rubrics, generate a 3-level rubric with criteria and point values in table format.",
  },
  {
    question:
      "To help geometry students overcome misconceptions about triangle area, best prompt?",
    answer:
      "Act as a highly skilled high school math teacher specializing in diagnosing and addressing misconceptions, provide 3-4 model responses.",
  },
  {
    question:
      "Students wrote about helpful monsters. Which prompt is best to generate an image?",
    answer:
      "Create an image of a helpful monster who loves to eat litter. Pink monster with a big smile and lots of hands. Use a cartoon style.",
  },
  {
    question:
      "A TA wants to design a jigsaw activity on Climate Change. How to apply Gemini?",
    answer:
      "Use the Gemini app with a detailed prompt: Act as a pedagogy expert. Design a 'jigsaw' activity with four distinct 'expert group' topics and a 3-step instruction sheet.",
  },
  {
    question:
      "A professor used voice-typing in Google Docs, found the language too long-winded. How to refine with integrated Gemini?",
    answer:
      'Highlight the text, click the Gemini icon, and select refinement options like "Shorten" and "Formalize."',
  },
  {
    question:
      "A professor applying for a grant with a 10-page CFP. Most streamlined workflow with Gemini?",
    answer:
      "Upload the CFP.pdf to Gemini app and prompt using @CFP.pdf, draft a 'Project Summary' aligned with Key Funding Priorities.",
  },
  {
    question:
      "Objective: create graduate-level analytical questions about Moby Dick. Gemini only created fact-based questions. Most effective next step?",
    answer:
      'Use the Gemini chat interface to provide a refinement prompt, asking to make the questions more "analytical" and "appropriate for a graduate-level audience."',
  },
  {
    question:
      "You use your Rubric Generator Gem for the first time. Output is logical but too simplistic for graduate students. Most efficient next step?",
    answer:
      "Edit the Gem's Instructions to add a new Persona constraint (e.g., Use a professional, academic tone suitable for graduate-level instruction).",
  },
  {
    question:
      "A new faculty member preparing to teach. Which approach is most pedagogically unethical?",
    answer:
      "Prompting Gemini to generate a complete 16-week course plan and adopting immediately without review.",
  },
  {
    question:
      "A professor can use Gemini to scaffold a large research project by prompting it to break down the assignment into steps, timeline, and mini-deadlines.",
    answer: "True",
  },
  {
    question:
      "The primary pedagogical application of Gemini is to automate administrative tasks and not intended for complex instructional or research tasks.",
    answer: "False",
  },
  {
    question:
      "Using AI to polish the grammar and tone of a near-final manuscript is a low-risk, high-benefit task.",
    answer: "True",
  },
  {
    question:
      "Pedagogical value of Gemini's features for research and course design?",
    answer: [
      "Creating a custom Gem pre-prompted to act as a Rubric Generator.",
      "Using Create Images to generate original, non-copyrighted visual aids.",
      "Using NotebookLM to upload key readings and generate Study Guides and Audio Overviews.",
      "Using Deep Research to generate a comprehensive, cited report on the latest findings.",
    ],
  },
  {
    question:
      "A teacher is concerned a student may have used Generative AI. What tools within Google Workspace could they use?",
    answer: "Use Version History to see the creation process over time.",
  },
  {
    question:
      "A teacher is concerned that using AI for essay outlines might lead to plagiarism. What actions?",
    answer:
      "Implement clear classroom guidelines for AI use, emphasize academic integrity, and teach students how to cite AI or use it as a starting point.",
  },
  {
    question:
      "A history teacher wants students to critically evaluate AI content for accuracy and bias. Most effective strategy?",
    answer:
      "Engaging students in an activity where they compare AI-generated summaries with verified textbook information, identifying discrepancies, biases, and unstated assumptions.",
  },
  {
    question:
      "A teacher asks AI to summarize a historical event. Response has incorrect date for a battle. Best way to handle?",
    answer:
      "Treat the incorrect date as a likely hallucination and fact-check using reliable, primary sources before using.",
  },
  {
    question:
      "A science teacher uses Gemini outputs directly without review. What risks?",
    answer: [
      "The AI-generated content could contain factual inaccuracies passed to the student.",
      "The AI-generated content could be written at an inappropriate level.",
    ],
  },
  {
    question:
      "An English teacher uses Gemini to generate essay topics, some potentially controversial. What should they do?",
    answer:
      "Critically review each topic for age-appropriateness, potential to foster respectful debate, factual neutrality, and biases, then revise.",
  },
  {
    question:
      "Students using Gemini to research current events. To foster critical thinking, which teacher action is most effective?",
    answer:
      "Assign students to cross-reference at least three key facts provided by Gemini with independent, reputable sources, and discuss discrepancies.",
  },
  {
    question:
      "Appropriate content for classroom guidelines on responsible and ethical use of generative AI?",
    answer:
      "A guideline requiring students to explicitly cite AI tools when used for brainstorming or drafting.",
  },
  {
    question:
      "A professor wishes to adapt course policy to mitigate AI misconduct while acknowledging its utility. Which strategies align?",
    answer:
      "Developing a tiered syllabus policy that explicitly defines AI-permissible, AI-cited, and AI-prohibited tasks.",
  },
  {
    question:
      "To proactively address factual inaccuracies when introducing Gemini in a 100-level course, plan should include?",
    answer: [
      "A low-stakes spot the hallucination activity in the first week.",
      "Require all AI-generated claims to be cross-referenced with at least one human source.",
      "Clear instructions for how AI can be used for each assignment.",
    ],
  },
  {
    question:
      "Which scenario describes a decision least justified, posing highest risk?",
    answer:
      "A professor uses a public-facing AI tool to draft feedback, uploading student's full, named paper with personal reflections.",
  },
  {
    question:
      "An administrator concerned about data privacy with NotebookLM. What assurance does it offer?",
    answer:
      "NotebookLM offers added data protection, meaning the data you enter is not human-reviewed and not used to train AI models.",
  },
  {
    question:
      "Gemini on Google Workspace for Education doesn't use your data to train the model.",
    answer: "True",
  },
  {
    question:
      "Why is it important to check a Gemini-generated response for potential biases?",
    answer:
      "Because the training data used by AI models may contain ingrained biases that could lead to skewed or unfair information.",
  },
  {
    question:
      "Effectively leveraging AI means using it to enhance, not replace, your own intellect. Good examples?",
    answer: [
      "Asking Gemini to act as a debate opponent to help you find weaknesses in your own argument.",
      "Prompting Gemini to summarize your lecture notes into key themes to help you prepare for an exam.",
    ],
  },
  {
    question: "Which of the following is an appropriate and ethical use of AI?",
    answer:
      "A student uses Gemini to generate brainstorming keywords to guide their own independent research.",
  },
  {
    question:
      'Which action violates the rule "Use Gemini to augment, not replace, your core scholarly skills"?',
    answer:
      "Using Gemini to perform the complete statistical analysis and writing the results section based on its output.",
  },
  {
    question:
      "Maintaining a log of AI interactions contributes to student accountability in which ways?",
    answer: [
      "It helps clearly distinguish between original ideas and AI suggestions.",
      "It allows demonstrating thought process and how AI was used as supportive tool.",
    ],
  },
  {
    question:
      "Which actions demonstrate a student using critical thinking to evaluate AI output?",
    answer: [
      "Cross-referencing a statistic provided by AI with a trusted academic journal.",
      "Questioning if an AI-generated summary presents a neutral or biased viewpoint.",
    ],
  },
  {
    question:
      "A student concerned about uncritically accepting biased AI viewpoints. Best proactive strategy?",
    answer:
      "Always treat the AI's output as a starting point and cross-reference its claims with diverse, reliable academic sources",
  },
  {
    question:
      "Primary reasons for emphasizing critical thinking as counter-strategy to generative AI risks?",
    answer: [
      "To equip students to independently verify AI-generated claims and identify sophisticated misinformation like hallucinations.",
      "To help analyze subtle biases embedded in AI responses.",
      "To ensure students can evaluate when to use AI versus human judgment.",
    ],
  },
  {
    question: "Metacognition applies to a student using Gemini how?",
    answer:
      "The student actively reflects on why they are using the tool, how it is shaping their thinking, and whether its output aligns with their own knowledge and values.",
  },
  {
    question:
      "An educator is using Google Docs with Google AI Pro for Education, which allows generating new content without leaving Docs.",
    answer: "True",
  },
  {
    question:
      "An educator uses Gmail with Google AI Pro for Education, allowing generating email responses without leaving Gmail.",
    answer: "True",
  },
  {
    question: "Which Google tools offer an integration with Gemini?",
    answer: [
      "Google Classroom",
      "Google Drive",
      "Google Meet",
      "Google Calendar",
    ],
  },
  {
    question:
      "A school administrator wants to create an Audio Overview of School Policy. Which tool(s)?",
    answer: ["NotebookLM", "Gemini for Education", "Google Drive"],
  },
  {
    question:
      "A school administrator wants to create an email newsletter. Which tool(s)?",
    answer: [
      "Gemini for Education",
      "Google Docs (with Gemini in Google Docs)",
    ],
  },
  {
    question:
      "To easily share into Google Classroom, you can share a link directing students to Gemini's Guided Learning Mode.",
    answer: "True",
  },
  {
    question: "Which methods can be used to open Gemini for Education?",
    answer: [
      "Head to the Gemini Icon in the Apps Launcher",
      "Head to gemini.google.com in the Omnibox",
    ],
  },
  {
    question:
      "An instructor has a Google Doc syllabus and wants to apply Gemini in Google Forms to generate a syllabus quiz. Where to navigate?",
    answer:
      "In a new Google Form, click the Gemini Help me create button at the top. Use @ key to attach syllabus.",
  },
  {
    question:
      "You can create a Google Vid using Google Slides as source material.",
    answer: "True",
  },
  {
    question:
      "A professor wants to create a new video from lesson slides with Google AI Pro for Education. Methods?",
    answer: "Open a new Google Vid and select Import Slides",
  },
  {
    question:
      "You imported Google Slides into Google Vids. Which components can you utilize?",
    answer: [
      "A draft script based on the content and speaker notes of the imported slides.",
      "An AI-generated voiceover track, with options to select different personas.",
      "A suggested storyboard with AI-selected stock footage and animations.",
      "A teleprompter for live recording and transcript trim to remove filler words.",
    ],
  },
  {
    question:
      "What is the main purpose of a prompt when interacting with an AI?",
    answer:
      "To give the AI a specific instruction, question, or task to perform.",
  },
  {
    question: "What is the definition of prompt engineering?",
    answer:
      "The skill of designing and refining input queries to guide an AI toward a desired, accurate, and relevant output.",
  },
  {
    question:
      "What are the four main areas to consider when writing an effective prompt?",
    answer: "Persona, Task, Context, and Format",
  },
  {
    question:
      "What is the purpose of the PARTS framework when writing a prompt for Gemini?",
    answer:
      "To provide a structured approach for creating effective prompts, ensuring the generated output is tailored and relevant to a specific learning goal.",
  },
  {
    question:
      "Which prompt uses the Persona and Act components of PARTS most effectively?",
    answer:
      "You are a history tutor. Create a 10-question multiple-choice quiz about the causes of World War I.",
  },
  {
    question:
      "A professor wants to generate a case study. Which prompt is more effective per PARTS?",
    answer:
      "Act as a bioethics professor. Create a case study for a 200-level undergraduate class. Focus on a gene-editing dilemma. End with three Socratic questions.",
  },
  {
    question:
      "A student designs a Gem to brainstorm project ideas. Which instruction is most effective?",
    answer:
      "You are a creative partner. Let's brainstorm three different ideas for a project on climate change.",
  },
  {
    question: "Match the weakness with the best follow-up prompt strategy.",
    answer: [
      "1. Technical jargon → Can you explain again and define key technical terms in simple language?",
      "2. One long dense paragraph → Could you reformat this using bullet points and headings?",
      "3. Too abstract → Can you provide a real-world example or analogy?",
    ],
  },
  {
    question: "Match the ethical term with its correct definition.",
    answer: [
      "1. Data Privacy → Principles and safeguards protecting user's personal and sensitive information.",
      "2. Intellectual Property → Ethical and legal framework governing ownership and rights of creative works including AI-generated.",
      "3. Algorithmic Discrimination → Potential for AI output to unfairly disadvantage individuals based on group membership.",
    ],
  },
  {
    question: "Match the strategy with the AI literacy skill.",
    answer: [
      "1. Evaluating for bias → Inspects AI's depiction of a group for accurate representation.",
      "2. Prompt engineering → Always asks follow-up questions to refine answers.",
      "3. Preventing misinformation → Always fact-checks AI-generated statistics with reliable external source.",
    ],
  },
  {
    question: "Match each task with its primary pedagogical function.",
    answer: [
      "1. Rewrite complex article for 100-level → Scaling instruction differentiation",
      "2. Generate three short-answer questions → Augmenting assessment design",
      "3. Brainstorm five-module outline → Scaffolding curriculum development",
    ],
  },
  {
    question:
      "Student struggling with chemistry concept. Arrange steps to provide support.",
    answer: [
      "Step 1: Take an image of the student's work",
      "Step 2: Upload the image to Gemini",
      "Step 3: Ask Gemini to identify common misconceptions",
      "Step 4: Ask Gemini to suggest new problems for them to solve",
    ],
  },
  {
    question:
      "A biology student using NotebookLM for a literature review on microplastics. Arrange steps in logical sequence.",
    answer: [
      "Step 1: Upload several peer-reviewed studies into NotebookLM as sources.",
      "Step 2: Prompt NotebookLM to identify common themes and conflicting findings.",
      "Step 3: Ask NotebookLM to generate a draft outline based on the key themes.",
      "Step 4: Review the AI-generated outline, refine and reorganize for logical narrative flow.",
    ],
  },
  {
    question:
      "A teacher would like help creating a mind map on a topic, which they have a number of existing resources for. Which tool could they use?",
    answer: "NotebookLM",
  },
  {
    question:
      "A science teacher integrates Gemini into their lesson planning process by having it generate quiz questions and design lab activity instructions. The teacher then uses these materials directly with students without thoroughly reviewing the AI's output for potential issues. What risks does this cause?",
    answer: [
      "The AI-generated content could contain factual inaccuracies, which are then passed to the student.",
      "The AI-generated content could be written at an inappropriate level for the students (either too simple or too complex).",
    ],
  },
  {
    question:
      "The school's administrative assistant is responsible for organizing the logistics for three different end-of-year field trips. They have uploaded the venue confirmation emails, the bus company contracts, and the parent letters for all three trips into NotebookLM. What is the most effective way for them to create a master schedule for the day of the trips?",
    answer:
      "Ask NotebookLM to 'Create a master timeline in a table format, extracting the departure times, arrival times, and venue contact numbers for each of the three trips from the sources.'",
  },
  {
    question:
      "Within NotebookLM, you have the option to 'search the web' to discover and add new sources to your notebook, rather than solely relying on your pre-uploaded documents.",
    answer: "False",
  },
  {
    question:
      "The students in class have been completing some creative writing on helpful monsters. You want to generate an image of a monster your students have described, which of these prompts would be best for this task?",
    answer:
      "Create an image of a helpful monster who loves to eat litter. They are a pink monster with a big smile and lots of hands for picking up items. Use a cartoon style and ensure the image is suitable for younger students.",
  },
  {
    question:
      "An educator has joined a new school and needs to understand a number of new school policies. How can NotebookLM help with this task?",
    answer: [
      "Create a study guide based on the content.",
      "Use audio overview to listen to the key points covered.",
      "Create an FAQ based on the content.",
    ],
  },
  {
    question:
      "A history teacher has uploaded several primary source documents about a specific event to NotebookLM. They want to find additional, related information from the web to broaden their students' understanding. Which NotebookLM feature would help with this?",
    answer: "The Discover Tool",
  },
  {
    question:
      "A school administrator is considering using NotebookLM for organizing research notes on new educational policies but is concerned about data privacy. What assurance does NotebookLM offer regarding the handling of uploaded documents and queries?",
    answer:
      "NotebookLM offers added data protection, meaning the data you enter, including sources, queries, and responses, is not human-reviewed and not used to train AI models.",
  },
  {
    question:
      " A teacher is concerned a student may have used Generative AI to complete their work. What tools within Google Workspace could they use to find out more about how the work was created?",
    answer: "Use Version History to see the creation process over time.",
  },
  {
    question:
      "An English teacher uses Gemini to generate a list of essay topics for a unit on persuasive writing. The AI provides a list that includes some potentially controversial topics, what should they do?",
    answer:
      "Critically review each topic for its age-appropriateness, potential to foster respectful debate, factual neutrality, and any inherent biases, then revise the output before using with students.",
  },
  {
    question:
      "A teacher is concerned that using AI tools like Gemini for generating essay outlines might inadvertently lead to student plagiarism, even if unintentional. What actions could they take to deal with this concern?",
    answer:
      "Implement clear classroom guidelines for AI use, emphasize academic integrity, and teach students how to appropriately cite AI tools or use them as a starting point for their own original work.",
  },
  {
    question:
      "A teacher wants their students to use Guided Learning mode in Gemini to learn more about photosynthesis - which of these would be the most suitable method?",
    answer:
      "Share a direct Guided Learning link into Google Classroom, to help students get to the correct place in Gemini easily.",
  },
  {
    question: "Which of the following are examples of Generative AI?",
    answer:
      "A type of AI that can create new and original content, such as text, images, or music.",
  },
  {
    question:
      "A science teacher wants to create an interactive activity to help their students understand density. Which of the following approaches would be the best?",
    answer:
      "Ask Gemini to create a web-based application with Canvas that allows students to adjust the mass and volume of an object and see how its density changes, and whether it floats or sinks in a liquid.",
  },
  {
    question:
      "A teacher uploads a one-page article on the lifecycle of a butterfly to NotebookLM. To help their class understand the key terms, what is the most effective use of the tool?",
    answer:
      "Ask NotebookLM to 'Generate a list of 5 key vocabulary words from the article and provide their definitions in simple terms'",
  },
  {
    question:
      "A teacher needs to create a rubric to assess a 5-minute oral presentation on reducing waste, which they then plan to use with Google Classroom. Which of these prompts would give the best response?",
    answer:
      "Act as a Humanities teacher with expertise in writing rubrics, and ask Gemini to generate a 3-level rubric with criteria (like research and public speaking) and point values for the presentation, specifying a table format.",
  },
  {
    question:
      "When NotebookLM answers a question based on the sources you've uploaded, how does it help you verify the information?",
    answer:
      "It provides inline citations that link directly to the relevant passages in your sources.",
  },
  {
    question: "A student is having trouble understanding a complex concept in chemistry and needs additional support and practice exercises. Let's put the following tasks in order to come up with a solution to support this student.",
    answer: [
      "Take photos of students' work.",
      "Upload Photos to Gemini",
      "Ask Gemini to point out common misconceptions.",
      "Ask Gemini to propose new problems for them to solve."
    ]
  },
  {
    question: "An educator has a new school policy to read and understand, how can Gemini help with this task?",
    answer: [
      "Upload a PDF of the policy and then ask Gemini for a Summary.",
      "Upload a PDF of the policy into Gemini and use Guided Learning to learn more about it.",
      "Upload a PDF of the policy into Gemini and ask Gemini to create an audio overview."
    ]
  },
  {
    question: "An educator wants to explore different teaching techniques for differentiation / adaptive teaching in their mixed-ability classroom as part of their professional development goals. Which of these Gemini prompts would be most appropriate for this task?",
    answer: "I am an experienced middle-school teacher. Help me to create a list of strategies to help support me to meet the needs of all of my students in my mixed-ability classroom."
  },
  {
    question: "Which of the following methods can be used to open Gemini for Education?",
    answer: [
      "Head to the Gemini Icon in the Apps Launcher",
      "Head to gemini.google.com in the Omnibox"
    ]
  },
  {
    question: "An educator needs to quickly create a set of tailored quiz questions about the key events of the American Revolution for a formative assessment. How can they effectively use Gemini to help with this task?",
    answer: "Enter a prompt in Gemini specifying the topic, grade level, and requesting quiz questions to check for understanding."
  },
  {
    question: " A history teacher wants to implement a strategy to help students develop AI literacy by understanding the limitations of AI tools, specifically how AI output can contain factual inaccuracies or biases. Which of the following strategies would be most effective in teaching students to critically evaluate AI-generated content for accuracy and bias?",
    answer: "Engaging students in an activity where they compare and contrast AI-generated summaries of historical events with verified textbook information, actively identifying discrepancies, biases, and unstated assumptions, followed by a class discussion on why these issues occur."
  },
  {
    question: "An educator uses a generative AI tool to help create a first draft of a lesson plan. To effectively keep themselves 'in the loop', what is the most critical next step?",
    answer: "Use their professional judgement to review, edit and adapt the AI's output to align with curriculum standards and their specific students' needs."
  },
  {
    question: "An administrator at a school needs help drafting a job description for a new teaching position. Which approach using Gemini is most likely to streamline this administrative task?",
    answer: "Enter a prompt in Gemini, acting as an Education HR specialist, requesting a job description for a teaching role including required skills and experience."
  },
  {
    question: "Which of the following would be appropriate content for simple classroom guidelines on the responsible and ethical use of generative AI?",
    answer: "A guideline requiring students to explicitly cite AI tools when used for brainstorming or drafting." 
  },
  {
    question: "A teacher asks a generative AI to summarise a historical event. The response is well written, but includes a specific date for a battle that the teacher believes is incorrect. What is the best way to handle this situation?",
    answer: "Treat the incorrect date as a likely hallucination and fact-check the information using reliable, primary sources before using it"
  },
  {
    question: "To make it easier to share in Google Classroom, you can share a link with students in Classroom to direct them to Gemini's Guided Learning mode.",
    answer: "True"
  },
  {
    question:
      "Students are using Gemini for research on a current event for a class project. To foster critical thinking skills regarding the AI-generated information, which teacher action would be most effective?",
    answer:
      "Assign students to cross-reference at least three key facts provided by Gemini with independent, reputable sources, and discuss discrepancies.",
  },
  {
    question: "An educator is using Google Workspace with the Google AI Pro for Education add-on and wants to create a new video for their students based on the slides from their lesson. Which of the following methods could be used?",
    answer: "Open a new Google Vid and select 'Import slides'"
  },
  {
    question: "Gemini on a Google Workspace for Education account doesn't use your data to train the model.",
    answer: "True"
  }
];
