const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var cancerL,geminiL,leoMajorL,leoMinorL,orionL,pegasusL,ursaMajorL;

function preload(){
     cancerL = loadImage("Images/cancer complete.png");
     geminiL = loadImage("Images/gemini complete.png");
     leoMajorL = loadImage("Images/leo major complete.png");
     leoMinorL = loadImage("Images/leo minor complete.png");
     orionL = loadImage("Image/orion complete/png");
     pegasusL = loadImage("Images/pegasus complete.png");
     ursaMajorL = loadImage("Images/ursa major complete.jpg");
}