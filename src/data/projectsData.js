export const projectsData = [
  {
    id: 1,
    title: "MATE ROV Competition 2023 Lancer Lumineers",
    subtitle: "Underwater Remotely Operated Vehicle for Marine Exploration | Lead Software Engineer & Electrical Engineer",
    techStack: ["C++", "Python", "Arduino", "Circuit Analysis", "Motors & Gen", "Electrical Wiring", "SOLIDWORKS", "Troubleshooting"],
    description: "Contributed to the development of an underwater Remotely Operated Vehicle (ROV) for the MATE ROV Competition 2023 as the Lead Software Engineer and Electrical Engineer. The project involved designing and implementing the electrical systems, motor controls, and sensor integration. Our team, Lancer Lumineer, successfully created a fully functional ROV capable of performing underwater tasks including navigation, object manipulation, and data collection.",
    images: [
      "/images/mate_rov_team/mate_defined.png",
      "/images/mate_rov_team/me_and_Barozh_controller.jpg",
      "/images/mate_rov_team/motor_controls_first_pass.jpg",
      "/images/mate_rov_team/computer_vision_debug.jpg",
      "/images/mate_rov_team/computer_vision_simple.jpg",
      "/images/mate_rov_team/LancerLumineers2ndPlace.jpg",
      "/images/mate_rov_team/PilotGUISetup.jpg",
      "/images/mate_rov_team/me_explain_motors1.jpg",
      "/images/mate_rov_robot/internal_electronics.jpg",
      "/images/mate_rov_robot/gui2.jpg"
    ],
    videos: [
      "https://www.youtube.com/embed/DPpsSWpNgJs",
      "https://www.youtube.com/embed/0FmsBV_8Qvk",
      "https://www.youtube.com/embed/RdKDlPXGp20",
      "https://www.youtube.com/embed/v0RQH_exZBk"
    ]
  },
  {
    id: 2,
    title: "CPP Bronco Space BLADE Project",
    subtitle: "Team 2's Cube Satellite 3D Printed Model and Avioncs Kit Demonstration",
    techStack: ["3D Printing", "Avionics Kit", "Project Mngmt", "Team Deputy", "Electronics Drafting"],
    description: "As part of CPP Bronco Space's BLADE project, our team developed a fully functional CubeSat model. This included creating 3D printed components and implementing an avionics kit for demonstration purposes. The project showcases the integration of hardware components and the practical application of aerospace engineering principles.",
    images: [
      "/images/project_images/team2CubeSat3Dmodel.png",
      "/images/project_images/BLADETeam2.jpg"
    ],
    videos: [
      "https://www.youtube.com/embed/bZWyhpyKWGs",
      "https://www.youtube.com/embed/pz6ZDuuBws4"
    ]
  },
  {
    id: 3,
    title: "Northrop Grumman Project 2024-25",
    subtitle: "Unmanned Aerial Vehicle (UAV) Electrical Sub-Team Member",
    techStack: ["Electrical Wiring", "KrakenSDR RF Device", "Linux/Ubuntu", "Raspberry Pi 5", "Buck Converters", "PCB Altium"],
    description: "The Northrop Grumman Collaboration Project (NGCP) is an interdisciplinary initiative at CPP focusing on UAVs. As an electrical team member, I troubleshooted KrakenSDR on a Raspberry Pi 5. I designed a schematic and PCB layout of a 5V DC-to-DC Buck Converter using TPS53515 IC to power the KrakenSDR and Pixhawk Flight Controller. Also set up software automation scripts for flight control.",
    images: [
      "/images/NGCP/ngcp_image.png",
      "/images/NGCP/krakenSDR_img01.jpg",
      "/images/NGCP/krakenSDR_img03.jpg",
      "/images/NGCP/krakenSDR_img04.jpg",
      "/images/NGCP/FinalNGCP_BuckConverterSchematic.png",
      "/images/NGCP/FinalPCBLayoutDesign.jpg",
      "/images/NGCP/JanSolderingBuckConverter.jpg",
      "/images/NGCP/krakenSDR_wPi5.jpg",
      "/images/NGCP/assembled_test_plane.jpg",
      "/images/NGCP/FinalPlane1.jpg"
    ],
    videos: [
      "https://www.youtube.com/embed/Qe-v2K0OLgo",
      "https://www.youtube.com/embed/APMF8vmdSF0"
    ]
  },
  {
    id: 4,
    title: "RFID Lock System",
    subtitle: "Arduino-based RFID Lock Prototype",
    techStack: ["RFID", "Arduino MEGA 2560", "RC522", "LCD 1602A", "Keypad", "DC Servo", "UART", "SPI"],
    description: "A simple RFID lock system that uses an RFID reader to read a unique ID and a servo motor to unlock a door. There are future plans to expand on this project such as unlocking and locking a pet door to give access to a room or home for pets and by adding more peripherals to the system.",
    images: [
      "/images/project_images/RFID_code.png",
      "/images/project_images/RFID_lock_system.jpg"
    ],
    videos: [
      "https://www.youtube.com/embed/N4h1oo1NWWo"
    ]
  },
  {
    id: 5,
    title: "5V Linear Regulator Altium Design",
    subtitle: "Custom 5V Linear Regulator PCB",
    techStack: ["Altium Design", "PCB Schematic", "Circuit Analysis", "PCB Layout", "Soldering", "Testing"],
    description: "Designed a 5V Linear Regulator using Altium Design. Converts a Vin of 7-35V to 5V output. Successfully soldered and tested the circuit finding success with Vin 15V outputting 5V accurately after resolving initial debugging issues.",
    images: [
      "/images/5V_Regulator_Design/5V_Linear_regulator.png",
      "/images/5V_Regulator_Design/5V_Linear_regulator_3D_topview.png",
      "/images/5V_Regulator_Design/5V_Linear_regulator_layout.png",
      "/images/5V_Regulator_Design/5V_regulator_testing.jpg",
      "/images/5V_Regulator_Design/5V_regulator_soldering.jpg",
      "/images/5V_Regulator_Design/Vin15V.jpg",
      "/images/5V_Regulator_Design/Vout5V.jpg"
    ],
    videos: [
      "https://www.youtube.com/embed/IrbGCYPG8f8"
    ]
  },
  {
    id: 6,
    title: "AI Web Scraper Project",
    subtitle: "Using Selenium and Ollama to scrape data from websites",
    techStack: ["Python", "Selenium", "Ollama", "Streamlit"],
    description: "An innovative web scraping tool that combines the power of Selenium for automated web navigation with Ollama's AI capabilities. Enables users to extract structured data from websites while leveraging AI to process and analyze the scraped content. Features include batch processing and custom search parameters.",
    link: "https://github.com/JanPastor/AI-Web-Scraper",
    images: [
      "/images/project_images/ai_scraper1.png",
      "/images/project_images/ai_scraper2.png",
      "/images/project_images/txt_batch1_result.png"
    ],
    videos: [
      "https://www.youtube.com/embed/8fRmXXE4Z_0"
    ]
  },
  {
    id: 7,
    title: "Computer Vision via META SAM 2.1",
    subtitle: "Manual Image and Video Segmentation",
    techStack: ["Python", "OpenCV", "PyTorch", "TensorFlow", "Numpy", "Matplotlib", "ffmpeg"],
    description: "Experimented and configured the META SAM 2.1 machine learning model for image and video segmentation. The images and videos were manually segmented using the model's predictions. Allows selection of frames to segment dynamically.",
    images: [],
    videos: [
      "https://www.youtube.com/embed/c-bpjIBAOo8",
      "https://www.youtube.com/embed/1bhil5o7OOs",
      "https://www.youtube.com/embed/1YwhdIy8NXI"
    ]
  }
];
