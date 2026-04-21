const DEFAULT_SAMPLES = [
  {
    question:
      "To help geometry students overcome common misconceptions about finding the area of triangles, how can an educator best prompt Gemini to generate model answers addressing these errors?",
    answer:
      "Act as a highly skilled high school math teacher specializing in diagnosing and addressing misconceptions, provide 3-4 model responses addressing common student errors, including detailed explanations suitable for students",
  },
  {
    question:
      "What does the “Share and Export” button in Gemini allow you to do?",
    answer: "Draft in Gmail, Export to Docs, Create a webpage",
  },
  {
    question:
      "A teacher is concerned a student may have used Generative AI to complete their work. What tools within Google Workspace could they use to find out more about how the work was created?",
    answer: "Use Version History to see the creation process over time.",
  },
  {
    question:
      "A teacher is planning a new unit on renewable energy for their class and wants to brainstorm engaging lesson ideas and classroom activities. How could they use Gemini as a thought partner to generate creative ideas for their curriculum planning?",
    answer:
      "Enter a prompt in Gemini describing the unit topic and grade level, and ask it to generate lesson ideas and activities",
  },
  {
    question:
      "An educator is using Google Docs with a Google AI Pro for Education, which allows them to generate new content without leaving Docs.",
    answer: "True",
  },
  {
    question:
      "A new sports coach at school uploads the team's playbook and last season's game summaries to NotebookLM. What is the most effective way to prepare for the new season?",
    answer:
      "Asking it to 'Identify which plays from the playbook were most successful according to the game summaries.' ",
  },
  {
    question:
      "A school administrator would like to create an email newsletter for parents. Which tool(s) could they use?",
    answer: "Google Docs (with Gemini in Google Docs), Gemini for Education",
  },
  {
    question: "Which of the following describes a Gem?",
    answer:
      "Gems let you save detailed prompt instructions for your most repeatable tasks so you can save time using Gemini.",
  },
  {
    question:
      "A history teacher wants to implement a strategy to help students develop AI literacy by understanding the limitations of AI tools, specifically how AI output can contain factual inaccuracies or biases. Which of the following strategies would be most effective in teaching students to critically evaluate AI-generated content for accuracy and bias?",
    answer:
      "Engaging students in an activity where they compare and contrast AI-generated summaries of historical events with verified textbook information, actively identifying discrepancies, biases, and unstated assumptions, followed by a class discussion on why these issues occur.",
  },
  {
    question:
      "Which of these statements best describes Guided Learning in Gemini?",
    answer:
      "Guided Learning allows you to upload sources and produce an audio podcast based specifically on the documents you uploaded.",
  },
  {
    question:
      "A teacher is concerned that using AI tools like Gemini for generating essay outlines might inadvertently lead to student plagiarism, even if unintentional. What actions could they take to deal with this concern?",
    answer:
      "Implement clear classroom guidelines for AI use, emphasize academic integrity, and teach students how to appropriately cite AI tools or use them as a starting point for their own original work.",
  },
  {
    question: "Which of the following can be created in NotebookLM",
    answer: "Mind Map, Audio Overview",
  },
  {
    question:
      "When AI chatbots generate false, nonsensical, or misleading outputs that seem believable, these errors are referred to as what?",
    answer: "Hallucinations",
  },
  {
    question:
      "An administrator at a school needs help drafting a job description for a new teaching position. Which approach using Gemini is most likely to streamline this administrative task?",
    answer:
      "Enter a prompt in Gemini, acting as an Education HR specialist, requesting a job description for a teaching role including required skills and experience.",
  },
  {
    question:
      "An educator is looking for practical strategies to increase student leadership and independence in their classroom environment. How can they use Gemini to suggest relevant ideas?",
    answer:
      "Upload a PDF of your current curriculum and ask Gemini to suggest student leadership and independence opportunities based around the content.",
  },
  {
    question:
      " Which of the following would be appropriate content for simple classroom guidelines on the responsible and ethical use of generative AI?",
    answer:
      "A guideline requiring students to explicitly cite AI tools when used for brainstorming or drafting.",
  },
  {
    question:
      " Which of the following features is primarily designed to help create multi-page reports?",
    answer: "Deep Research",
  },
  {
    question:
      "An educator wants to create a study guide for their students based on their uploaded lesson notes. How can NotebookLM help them efficiently generate materials grounded in their specific content?",
    answer:
      "Upload the lesson notes to NotebookLM and prompt it to create a study guide based on the uploaded source.",
  },
  {
    question:
      "A parent sends an email with several specific questions about the school's new, multi-page 'Bring Your Own Device' (BYOD) policy. To ensure their response is accurate, the teacher uploads the official policy document to NotebookLM. Which of the following is the most efficient and reliable way for the teacher to use NotebookLM to address the parent's specific questions?",
    answer:
      'Ask it to "Create an FAQ based on the source that directly answers the parent\'s list of specific questions."',
  },
  {
    question:
      "An educator is starting a large research project with dozens of articles and notes. How would NotebookLM be most beneficial in the initial stages?",
    answer:
      "By synthesizing information across all uploaded documents to help them find connections and draft an outline.",
  },
  {
    question:
      "To make it easier to share into Google Classroom you can share a link with students in Classroom to direct them to Gemini's Guided Learning Mode.",
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
      "A school administrator would like to create an Audio Overview of a School Policy. Which tool(s) could they use? ",
    answer: "NotebookLM",
  },
  {
    question:
      "A history teacher has uploaded several primary source documents about a specific event to NotebookLM. They want to find additional, related information from the web to broaden their students' understanding. Which NotebookLM feature would help with this?",
    answer: "The Discover Tool",
  },
  {
    question:
      "An educator wants to get a quick, audible summary of a lengthy research paper they've uploaded to NotebookLM while they are multitasking. Which feature should they use?",
    answer: "Audio Overview",
  },
  {
    question: "You can upload an MP3 file to NotebookLM",
    answer: "True",
  },
  {
    question: "Which of the following methods can be used to open NotebookLM?",
    answer: [
      "Head to notebooklm.google.com in the Omnibox",
      "Head to the NotebookLM Icon in the Apps Launcher",
    ],
  },
  {
    question:
      "When an AI system shows a tendency to produce results that are systematically prejudiced due to the data it was trained on, this is known as:",
    answer: "Bias",
  },
  {
    question: "You can listen to a response in Gemini for Education?",
    answer: "True",
  },
  {
    question:
      "An educator is looking to adapt some text for use by students with a lower reading level. Which method could they use to achieve this?",
    answer:
      "Start a new chat in Gemini. Paste the text and add a prompt, asking Gemini to reduce the reading level of the text.",
  },
  {
    question: "Your recent chats can be saved in Gemini?",
    answer: "True",
  },
  {
    question:
      "A school administrator is considering using NotebookLM for organizing research notes on new educational policies but is concerned about data privacy. What assurance does NotebookLM offer regarding the handling of uploaded documents and queries?",
    answer:
      "NotebookLM offers added data protection, meaning the data you enter, including sources, queries, and responses, is not human-reviewed and not used to train AI models.",
  },
  {
    question:
      "An educator frequently performs repetitive tasks, such as generating variations of lesson plans for different class periods. How can they use Gemini's 'Gems' feature to save time on this?",
    answer:
      "Create a custom 'Gem' in Gemini with pre-set instructions and context for generating lesson plan variations, allowing them to quickly apply the Gem whenever needed.",
  },
  {
    question: 'What is "Generative AI"?',
    answer:
      "A type of AI that can create new and original content, such as text, images, or music.",
  },
  {
    question:
      "You can customize the Audio Overview in NotebookLM to make the length shorter or longer.",
    answer: "False",
  },
  {
    question:
      "What specific type of AI refers to a system which can create new types of content, such as text, images, or video?",
    answer: "Generative AI",
  },
  {
    question:
      "How can an educator utilize Gemini to generate a creative writing prompt for a poetry unit aimed at high school students?",
    answer:
      "Input a prompt in Gemini requesting a unique, imaginative, or thought-provoking poetry prompt, specifying the grade level and desired theme.",
  },
  {
    question: "Which Google Workspace apps integrate with Gemini AI features?",
    answer: [
      "Google Docs",
      "Google Sheets",
      "Google Slides",
      "Gmail",
      "Google Drive",
    ],
  },
  {
    question: "What are the key benefits of using AI in education?",
    answer: [
      "Personalized learning experiences for students",
      "Time-saving for teachers with automated tasks",
      "Enhanced accessibility for diverse learners",
      "Data-driven insights for better decision making",
    ],
  },
  {
    question: "An educator has a new school policy to read and understand, how can Gemini help with this task?",
    answer: [
      "Upload a PDF of the policy and then ask Gemini for a Summary.",
      "Use Deep Research to create a new school policy on the same topic.",
      "Upload a PDF of the policy into Gemini and use Guided Learning to learn more about it.",
      "Upload a PDF of the policy into Gemini and ask Gemini to create an audio overview.",
    ]
  }
];
