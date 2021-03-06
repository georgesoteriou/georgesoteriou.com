$(function() {
  //GitGraph
  var gitgraph = new GitGraph({ author: "" });
  gitgraph.template.colors = [
    "white",
    "#ff8000",
    "#94C7B2",
    "#0091D4",
    "#225590",
    "#009edc"
  ];
  gitgraph.template.commit.message.font = "normal 15pt Arial";

  var master = gitgraph.branch("master");
  master.commit(" - Initial Commit (26/05/1997)");
  master.commit(" - Complete Primary School @ Junior School Nicosia");
  var English = master.branch("English School");
  English.commit(" - Get Accepted @ English School Nicosia");
  English.commit(" - Start Highschool @ English School Nicosia");
  master.commit(" - Pass Ham Radio exam and get a License (5B4AJZ)");
  English.commit(" - Get Elected for Radio Club (5B4ES) President (4 years)");
  master.commit(" - Volunteer and Help organise Hack{Cyprus} with CEL");
  master.commit(" - Create and Organize Hack{Cyprus}Code School with CEL");
  English.commit(" - Create and was President of Tecnology club for 2 years");
  var Think = master.branch("Think Learning Centre");
  Think.commit(" - Start working as Web Developer");
  English.commit(" - Complete A-Level: Double Maths with A*, A");
  English.commit(" - Complete A-Level: Computing with A*");
  English.commit(" - Complete A-Level: Physics with A");
  English.merge(master);
  Think.commit(" - Create Think Learning Centre Website");
  Think.merge(master);
  master.commit(" - Join Cyprus Army as Corporal");
  master.commit(" - Complete Army Service");
  master.commit(" - Get Accepted @ Imperial College London");
  var Imperial = master.branch("Imperial College");
  Imperial.commit(" - Start Computing @ Imperial College London");
  Imperial.commit(" - Volunteer for ICHack18");
  master.commit(" - Take part in Google Hashcode 2018");
  var DoCSoc = Imperial.branch("DoCSoc");
  Imperial.commit(" - Complete Year 1");
  DoCSoc.commit(" - Run and get elected for DoCSoc WebMaster 2018-19");
  DoCSoc.commit(" - Create Sponsors Portal v1");
  DoCSoc.commit(" - Organize ICHack 2019");
  DoCSoc.commit(" - Organize Google Hashcode 2019 at Imperial");
  Imperial.commit(" - Complete Year 2");
  DoCSoc.commit(" - Run and get elected for DoCSoc WebMaster 2019-20");
  master.commit(" - Work at Goldman Sachs as Spring Technology Intern");
  var Cisco = master.branch("Cisco");
  Cisco.commit(" - Start work at Cisco as Platform Engineer Intern");
  Cisco.commit(" - Create AWS Cisco Kubernetes Cluster");
  Cisco.commit(" - Create GCP Cisco Kubernetes cluster");
  Cisco.commit(" - Get MeetPaaS (Webex Teams) to work on Clusters");
  Cisco.merge(master);
  DoCSoc.commit(" - Create Sponsors Portal v2");
});
