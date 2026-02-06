import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styles: ['invert  { filter: invert(1) }']
})
export class SkillsComponent {

  languages = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg', isInvertLogo: false },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/sqldeveloper/sqldeveloper-original.svg', isInvertLogo: false },
    { name: 'R', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/r/r-original.svg', isInvertLogo: false },
  ];

  mainframes = [
    { name: 'COBOL', logo: 'https://www.svgrepo.com/show/339080/cobol-language.svg', isInvertLogo: true },
    { name: 'JCL', logo: 'https://logowik.com/content/uploads/images/ibm-zos8033.logowik.com.webp', isInvertLogo: false },
  ];

  databases = [
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', isInvertLogo: false },
    { name: 'DB2', logo: 'https://dbdb.io/media/logos/ibm-db2-vertical.svg', isInvertLogo: false },
    { name: 'IMS DB', logo: 'https://www.svgrepo.com/show/37270/hierarchy.svg', isInvertLogo: false },
    { name: 'Teradata', logo: "https://www.svgrepo.com/show/419142/big-data-configuration-database.svg", isInvertLogo: false },
    { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg', isInvertLogo: false }
  ];

  projectManagement = [
    { name: 'Agile', logo: 'https://k21academy.com/wp-content/uploads/2021/11/Agile-Icon-300x248.png', isInvertLogo: false },
    { name: 'Jira', logo: 'https://www.svgrepo.com/show/353935/jira.svg', isInvertLogo: false },
    { name: 'Kanban', logo: 'https://www.svgrepo.com/show/439199/kanban.svg', isInvertLogo: false },
    { name: 'Git', logo: 'https://www.svgrepo.com/show/353782/git-icon.svg', isInvertLogo: false },
    { name: 'Scrum', logo: 'https://www.svgrepo.com/show/439311/scrum.svg', isInvertLogo: false },
    { name: 'Rational Clear Case', logo: 'https://www.svgrepo.com/show/349407/ibm.svg', isInvertLogo: false },
    { name: 'ServiceNow', logo: 'https://www.nagarro.com/hubfs/SeviceNow-Badge.png', isInvertLogo: false },
    { name: 'Smart sheet', logo: 'https://seekvectors.com/files/download/Smartsheet-02.jpg', isInvertLogo: false },
    { name: 'PowerPoint', logo: 'https://www.svgrepo.com/show/373989/powerpoint.svg', isInvertLogo: false }
  ];

  tools = [
    { name: 'Power BI', logo: 'https://download.logo.wine/logo/Power_BI/Power_BI-Logo.wine.png', isInvertLogo: true },
    { name: 'Tableau', logo: 'https://www.svgrepo.com/show/354428/tableau-icon.svg', isInvertLogo: false },
    { name: 'Informatica Power Center', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgS7plzogzdUm6sao4Ft3exlvyldPq4DKOiw&s', isInvertLogo: false },
    { name: 'Excel', logo: 'https://www.svgrepo.com/show/373590/excel2.svg', isInvertLogo: false },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', isInvertLogo: false },
    { name: 'Google Analytics', logo: 'https://www.svgrepo.com/show/353804/google-analytics.svg', isInvertLogo: false }, 
    { name: 'ArcGIS Pro', logo: 'https://onegeo.co/blog/posts/2023-08-31-visualise-3d-building-data-in-arcgis/images/arcgis-pro-logo.png', isInvertLogo: false }
  ];

  machineLearning = [
    'Regression',
    'Random Forest',
    'Time Series',
    'KMeans',
    'DBSCAN',
    'UMAP',
    'Statistical Analysis',
    'Hypothesis testing',
    'Causal Inference',
    'A/B Testing', 
    'Sentiment Analysis', 
    'LLM'
  ];  

} 

