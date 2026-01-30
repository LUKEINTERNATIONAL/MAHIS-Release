import { I as IMAGES } from './images-BztIIDM8.js';

const neonatalInfographics = [
  {
    key: "EmergencyManagement",
    sections: [
      {
        title: "Resuscitate the baby",
        image: IMAGES.infographics.helpingBabiesBreathe
      },
      {
        title: "How to use a bag valve mask",
        image: IMAGES.infographics.howToUseBagValveMask
      },
      {
        title: "When stable continue",
        description: "If no HR for > 10 minutes or remains < 60/min for 20 mins \n STOP resuscitating but CONTINUE",
        image: IMAGES.infographics.resuscitate
      }
    ]
  },
  {
    key: "StartMeasuringOxygenSaturation",
    sections: [
      {
        title: "Start measuring oxygen saturation",
        bullets: ["Attach the pulse oximeter."],
        image: IMAGES.infographics.oxygenSaturation
      },
      {
        title: "Start measuring Temperature",
        bullets: ["Put the thermometer under the arm."],
        image: IMAGES.infographics.temperatureMeasureDevice
      }
    ],
    footerNote: "",
    footerNoteType: "warning"
  },
  {
    key: "GruntingSevereChestIndrawings",
    sections: [
      {
        title: "Measure Oxygen saturation",
        image: IMAGES.infographics.babyOnOxygen
      },
      {
        title: "Airway",
        bullets: ["Suction if visible secretions", "Neutral position (as shown below)."],
        image: IMAGES.infographics.airway
      },
      {
        title: "Respiratory support",
        image: IMAGES.infographics.babyOxygen
      }
    ]
  },
  {
    key: "RespiratoryDistress",
    sections: [
      {
        title: "Airway",
        bullets: ["Suction if visible secretions", "Neutral position (as shown below)."],
        image: IMAGES.infographics.airway
      },
      {
        title: "Respiratory support",
        bullets: ["Put on oxygen via nasal prongs", "Maintain Sats 90-95%"],
        image: IMAGES.infographics.babyOxygen
      },
      {
        title: "Feeding support",
        bullets: [
          "The baby may need NGT, OGT or IV fluids at a higher level facility. (Likely to need IV access to antibiotics.",
          "This baby will need referral to a higher level facility as will be unable to effectively breast or cup feed."
        ]
      }
    ]
  },
  {
    key: "CentralCyanosis",
    sections: [
      {
        title: "Keep Warm",
        bullets: ["Dry and wrap the baby.", "Put on a hat.", "Put the baby under a radiation warmer or resuscitaire"]
      },
      {
        title: "Respiratory support",
        bullets: ["Put on nasal cannula oxygen"]
      },
      {
        title: "Listen for Murmurs",
        bullets: ["Use your stethoscope to listen for extra sounds.", "When stable if possible refer for ECHOCARDIOGRAM."]
      }
    ]
  },
  {
    key: "ConsulvionsTwitching",
    sections: [
      {
        title: "Airway management & oxygen",
        bullets: ["Check for secretions, suction if visible secretions.", "Put on oxygen", "Neutral position (as shown below)."],
        image: IMAGES.infographics.airway
      },
      {
        title: "Check blood glucose",
        bullets: [
          "If < 45 mg/dl or < 2.5 mmol/L give IV 10% glucose at 2ml/kg.",
          "If blood glucose monitoring not available give IV 10% glucose at 2ml/kg.",
          "Do full infection screen.",
          "If possible take blood for Ca, Mg, U and E's, FBC."
        ]
      },
      {
        title: "Give anticonvulsants",
        bullets: [
          "Give phenobarbitone 20mg/kg IM.",
          "Repeat loading dose if necessary.",
          "If seizures ongoing give Paraldehyde Dose: 0.2 ml/kg IM, 0.4 ml/kg PR.",
          "If seizures still ongoing - give maintenance phenobarbitone 5mg/kg PO/IM."
        ]
      }
    ],
    footerNote: "When seizures have stopped and baby stable. click the green arrow to continue",
    footerNoteType: "danger"
  },
  {
    key: "WarmTheBody",
    sections: [
      {
        title: "Warm the body",
        bullets: ["Skin to skin (KMC position) or place on warmer or resuscitaire."]
      },
      {
        title: "Limit heat loss",
        bullets: [
          "Make sure baby is dry.",
          "Put on a hat and wrap up the baby.",
          "If on resuscitaire put on side up.",
          "Consider The 4 ways by which a baby can lose heat are:"
        ],
        image: IMAGES.infographics.babyWarmth
      },
      {
        title: "Monitor temperature",
        bullets: [
          "Check temperature every 15-30 minutes or until warm between 36.6-37.5’C",
          "Watch out for overwarming (>37.5)",
          "Complete the Neotree assessment to assess for signs of infection, apnoes and hypoglycemia."
        ]
      }
    ]
  },
  {
    key: "KeepTheBodyWarm",
    sections: [
      {
        title: "Keep the body warm",
        bullets: ["Dry and wrap the baby.", "Put under a radiant warmer"]
      },
      {
        title: "Put the baby on oxygen",
        bullets: ["Put on oxygen via nasal prongs.", "Maintain Sats 90-95%"],
        image: IMAGES.infographics.babyOxygen
      },
      {
        title: "Give IV fluid bolus (NG if IV access difficult).",
        bullets: [
          "Give 10 ml/kg ringers lactate over 1 hr.",
          "If still has severely impaired circulation after reassessment, repeat bolus.",
          "You may repeat boluses until a max of 40 mls/kg has been given and then consider blood transfusion.",
          "If giving blood, use 20 mls/kg of whole blood or 10mls/kg of packed red cells.",
          "Consider CPAP if the respiratory rate has increased from baseline during the boluses as these babies may get pulmonary oedema."
        ]
      }
    ],
    footerNote: "Reassess the baby - if CRT < 3 seconds and baby stable continue with neotree.",
    footerNoteType: "danger"
  },
  {
    key: "ReferralInstructions",
    sections: [
      {
        title: "Stabilization",
        bullets: [
          "Assess ABCCCD (Airway, Breathing, Circulation, Coma, Convulsions and Dehydration) and treat emergency signs.",
          "Ensure baby is on Oxygen IF AVAILABLE.",
          "Keep Warm - place hat and wrap baby.",
          "Review by senior clinician or nurse - if available.",
          "Give stat doses of antibiotics - Xpen and Gentamicin.",
          "If mum is able to express encourage feeding by cup ONLY if baby can tolerate"
        ]
      },
      {
        title: "Communication & Documentation",
        bullets: [
          "Inform receiving facility (KDH) of case summary by phone call or WhatsApp group - discuss availability of portable oxygen & medical escort.",
          "Communicate to guardian intention to refer and reasons.",
          "Attach Neotree print out ready for transit.",
          "Attach all relevant documents/ notes/ checks (glucose, HIV, VDRL etc.)"
        ]
      },
      {
        title: "Management in Transit",
        bullets: [
          "Put baby on portable oxygen IF AVAILABLE.",
          "Refer in KMC position unless clinical conditions require observation & care in transit.",
          "Refer with escort (Nurse or clinician) with BVM equipment - IF AVAILABLE.",
          "Nurse or clinician to bring emergency supplies in ambulance (bag & mask, penguin sucker, dextrose etc)",
          "IN PERSON handover by nurse or clinician at reg facility - if possible."
        ]
      }
    ]
  },
  {
    key: "BabyRecoveredStillSevereRespiratory",
    sections: [
      {
        title: "",
        bullets: [
          "Maintain meutral position.",
          "Maintain on oxygen.",
          "Feeding support (NGT, OGT or IV fluids).",
          "Transfer urgently to the High risk section.",
          "Assess and consider the need for CPAP using the TRY-CPAP algorithm."
        ]
      },
      {
        title: "",
        image: IMAGES.infographics.tryCpap,
        description: ""
      }
    ]
  },
  {
    key: "BagValveMaskUsage",
    sections: [
      {
        title: "How to use a bag valve mask",
        image: IMAGES.infographics.howToUseBagValveMask,
        description: "Proper technique for bag valve mask ventilation"
      },
      {
        title: "Step 1: Position the baby",
        description: "Place baby on flat surface with head in neutral position",
        image: IMAGES.infographics.airway
      },
      {
        title: "Step 2: Create a seal",
        description: "Use thumb and forefinger to create C-grip, use remaining fingers to lift jaw"
      },
      {
        title: "Step 3: Squeeze the bag",
        description: "Squeeze bag smoothly, watch for chest rise",
        image: IMAGES.infographics.bagValveUsage
      },
      {
        title: "Step 4: Maintain rate",
        description: "Ventilate at 40-60 breaths per minute",
        image: IMAGES.infographics.babyOxygen
      }
    ],
    footerNote: "Ensure proper seal and chest rise with each breath",
    footerNoteType: "warning"
  },
  {
    key: "EmergencyTriage",
    sections: [
      {
        title: "Emergency Triage",
        subtitle: "Can you observe any of the following on the baby?",
        highlightText: "Is the baby crying?",
        highlightType: "warning",
        description: "Initial assessment to determine urgency of care"
      },
      {
        title: "Breathing Assessment",
        highlightText: "Is the baby breathing?",
        highlightType: "danger",
        description: "Check the Airway, Heart Rate and Time"
      },
      {
        title: "NOT BREATHING",
        bullets: ["GASPING or irregular breathing", "Normal breathing but RR < 100"],
        description: "Requires immediate intervention"
      },
      {
        title: "Respiratory Signs",
        bullets: ["VERY FLOPPY (Normal breathing & HR)", "Stable"],
        description: "Monitor and assess accordingly"
      }
    ],
    footerNote: "If not baby is crying, do not ask the breathing questions below first",
    footerNoteType: "danger"
  },
  {
    key: "EmergencyTriageObservations",
    sections: [
      {
        title: "Can you observe any of the following on the baby?",
        subtitle: "Select all those that are present"
      },
      {
        title: "Critical Signs",
        bullets: ["Grunting or Severe chest indrawing's", "Central cyanosis", "Convulsions or twitching"],
        description: "Any of these signs require immediate attention"
      },
      {
        title: "Assessment Options",
        bullets: ["NONE - no emergency signs present"],
        description: "Continue with standard assessment if no emergency signs"
      }
    ],
    footerNote: "Select all those that are present",
    footerNoteType: "info"
  },
  {
    key: "RespiratoryDistressSigns",
    labels: [
      "Not Breathing",
      "Gasping or irregular breathing",
      "Normal breathing but Heart Rate < 100",
      "Very Floppy (Normal breathing & HR)",
      "Stable"
    ],
    values: ["not_breathing", "gasping_irregular", "normal_breathing_low_hr", "very_floppy", "stable"],
    descriptions: [
      "No respiratory effort - immediate resuscitation required",
      "Irregular respiratory pattern - sign of severe distress",
      "Bradycardia despite breathing - requires intervention",
      "Hypotonia with normal vitals - needs evaluation",
      "Normal respiratory and cardiac function"
    ],
    footerNote: "If not breathing, do not ask the breathing questions below first",
    footerNoteType: "danger"
  },
  {
    key: "KeepWarmDryCovered",
    sections: [
      {
        title: "Keep Warm",
        description: "Maintain body temperature to prevent hypothermia"
      },
      {
        title: "Keep Dry",
        description: "Dry the baby immediately after birth"
      },
      {
        title: "Keep Covered",
        description: "Cover with warm blankets, leaving face exposed"
      }
    ],
    footerNote: "Temperature regulation is critical for newborn survival",
    footerNoteType: "warning"
  },
  {
    key: "ListenForBreathingSounds",
    labels: ["When child cries - cries normally", "When child cries - NO SOUND", "When child cries - GRUNTING when breathing out"],
    values: ["cries_normally", "no_sound", "grunting"],
    descriptions: [
      "Normal cry indicates good respiratory function",
      "Silent cry - possible airway obstruction or severe respiratory distress",
      "Grunting - sign of respiratory distress, attempting to maintain positive airway pressure"
    ],
    sections: [
      {
        title: "Listen for breathing sounds",
        subtitle: "Assess the quality of cry and breathing"
      }
    ]
  },
  {
    key: "RespiratoryRate",
    labels: [
      "Put on a pulse oximeter - Respiratory rate?",
      "Put on a pulse oximeter - Neutral position?",
      "Put on a pulse oximeter - Put in safe place and recheck for colour after 3 hrs"
    ],
    values: ["check_respiratory_rate", "check_neutral_position", "recheck_after_3hrs"],
    sections: [
      {
        title: "Respiratory Assessment",
        description: "Monitor oxygen saturation and respiratory rate"
      },
      {
        title: "Positioning",
        description: "Ensure baby is in neutral position for accurate assessment"
      },
      {
        title: "Ongoing Monitoring",
        description: "Place in safe location and reassess color after 3 hours"
      }
    ]
  },
  {
    key: "GruntingIndrawingManagement",
    sections: [
      {
        title: "Grunting or Severe Chest Indrawing Detected",
        highlightText: "Emergency Respiratory Management Required",
        highlightType: "danger",
        description: "Immediate intervention needed for respiratory distress"
      },
      {
        title: "Immediate Actions",
        bullets: [
          "Position baby to open airway (head neutral position)",
          "Start oxygen therapy if available",
          "Monitor respiratory rate continuously",
          "Prepare for possible ventilation support"
        ],
        description: "These signs indicate significant respiratory distress requiring urgent care"
      },
      {
        title: "Oxygen Administration",
        description: "Apply oxygen via nasal prongs or face mask at 1-2 L/min",
        image: IMAGES.infographics.babyOxygen
      },
      {
        title: "Monitor",
        bullets: [
          "Check oxygen saturation every 15 minutes",
          "Observe for improvement in breathing pattern",
          "Watch for worsening signs (increased work of breathing)"
        ],
        description: "Continuous monitoring is essential"
      }
    ],
    footerNote: "If no improvement or worsening, prepare for bag valve mask ventilation",
    footerNoteType: "danger"
  },
  {
    key: "CentralCyanosisManagement",
    sections: [
      {
        title: "Central Cyanosis Detected",
        highlightText: "Critical Oxygenation Issue",
        highlightType: "danger",
        description: "Blue discoloration of central areas (tongue, lips, mucous membranes)"
      },
      {
        title: "Immediate Actions",
        bullets: [
          "Start high-flow oxygen immediately",
          "Check airway is clear and patent",
          "Monitor oxygen saturation with pulse oximeter",
          "Ensure proper positioning for optimal breathing"
        ],
        description: "Central cyanosis indicates severe oxygen deficiency"
      },
      {
        title: "Oxygen Therapy",
        description: "Administer oxygen at appropriate flow rate to achieve SpO2 >90%",
        image: IMAGES.infographics.babyOxygen
      },
      {
        title: "Assessment",
        bullets: [
          "Check heart rate and rhythm",
          "Assess for breathing difficulties",
          "Look for other signs of distress",
          "Consider cardiac vs respiratory cause"
        ],
        description: "Determine underlying cause while treating"
      }
    ],
    footerNote: "If cyanosis persists despite oxygen, prepare for advanced airway management",
    footerNoteType: "danger"
  },
  {
    key: "ConvulsionsManagement",
    sections: [
      {
        title: "Convulsions or Twitching Detected",
        highlightText: "Neurological Emergency",
        highlightType: "danger",
        description: "Seizure activity requires immediate intervention"
      },
      {
        title: "Immediate Safety Measures",
        bullets: [
          "Protect baby from injury (padding around head)",
          "Position on side to prevent aspiration",
          "Do NOT restrain movements",
          "Clear airway, suction if needed",
          "Provide oxygen"
        ],
        description: "Ensure safety during seizure activity"
      },
      {
        title: "Medical Management",
        bullets: [
          "Check blood glucose immediately",
          "Administer glucose if hypoglycemic",
          "Prepare anticonvulsant medication",
          "Monitor vital signs continuously"
        ],
        description: "Address underlying causes while controlling seizures"
      },
      {
        title: "Monitor",
        bullets: ["Duration of seizure activity", "Type and pattern of movements", "Level of consciousness", "Response to treatment"],
        description: "Document seizure characteristics and response to intervention"
      }
    ],
    footerNote: "Seizures lasting >5 minutes or recurring require anticonvulsant medication",
    footerNoteType: "danger"
  },
  {
    key: "NeurologicalToneAssessment",
    sections: [
      {
        title: "Tone Assessment",
        description: "Assess the baby's muscle tone and movement",
        image: IMAGES.infographics.babyToneAssesmentOne
      },
      {
        title: "Normal Tone",
        description: "Baby has active movement in all limbs with normal resistance to passive movement",
        image: IMAGES.infographics.babyToneAssesmentTwo
      },
      {
        title: "Assessment Steps",
        bullets: [
          "Observe baby's posture and spontaneous movements",
          "Gently move arms and legs to assess resistance",
          "Check for symmetry of movement",
          "Note any stiffness (hypertonia) or floppiness (hypotonia)"
        ],
        description: "Evaluate muscle tone systematically"
      }
    ],
    footerNote: "Normal tone shows flexed posture with active movement",
    footerNoteType: "info"
  },
  {
    key: "NeurologicalSuckReflex",
    sections: [
      {
        title: "Suck Reflex Assessment",
        description: "Test the baby's ability to coordinate sucking",
        image: IMAGES.infographics.babySuckReflex
      },
      {
        title: "How to Test",
        bullets: [
          "Wash your hands thoroughly",
          "Gently place your clean finger in the baby's mouth",
          "Stroke the palate with your fingertip",
          "Observe the sucking response"
        ],
        description: "Proper technique for assessing suck reflex"
      },
      {
        title: "Normal Response",
        bullets: [
          "Baby should begin sucking immediately",
          "Sucking should be rhythmic and coordinated",
          "Strong negative pressure should be felt"
        ],
        description: "A strong suck reflex indicates good neurological function"
      }
    ],
    footerNote: "Weak or absent suck reflex may indicate neurological problems or prematurity",
    footerNoteType: "warning"
  },
  {
    key: "NeurologicalGraspReflex",
    sections: [
      {
        title: "Grasp Reflex (Palmar Grasp)",
        description: "Test the baby's grasp reflex",
        image: IMAGES.infographics.babyGraspReflex
      },
      {
        title: "How to Test",
        bullets: [
          "Place your finger in the baby's palm",
          "Gently press against the palm",
          "Observe if fingers curl around your finger",
          "Check both hands"
        ],
        description: "The grasp should be strong enough to support some of the baby's weight"
      },
      {
        title: "Normal Response",
        bullets: [
          "Immediate grasping when palm is stimulated",
          "Fingers curl tightly around object",
          "Reflex should be symmetric in both hands"
        ],
        description: "A strong, symmetric grasp reflex is normal"
      }
    ],
    footerNote: "Asymmetric or absent grasp may indicate nerve injury or neurological problems",
    footerNoteType: "warning"
  },
  {
    key: "NeurologicalMoreReflex",
    sections: [
      {
        title: "Moro Reflex (Startle Reflex)",
        description: "Test the baby's Moro reflex",
        image: IMAGES.infographics.babyMoreReflex
      },
      {
        title: "How to Test",
        bullets: [
          "Support the baby's head and body",
          "Allow the head to drop back slightly (about 30 degrees)",
          "Catch the head immediately",
          "Observe the baby's response"
        ],
        description: "This reflex can also be elicited by a sudden loud noise"
      },
      {
        title: "Normal Response - Two Phases",
        bullets: [
          "Phase 1: Arms extend outward (abduction)",
          "Phase 2: Arms come back together (adduction)",
          "Often accompanied by crying",
          "Should be symmetric on both sides"
        ],
        description: "The Moro reflex should be brisk and symmetric"
      }
    ],
    footerNote: "Absent, asymmetric, or exaggerated Moro reflex may indicate neurological problems",
    footerNoteType: "warning"
  },
  {
    key: "JaundiceManagement",
    sections: [
      {
        title: "Kramer Score zones",
        description: "Look at the baby. \n Where does the yellow color appear? Zone 1-4 corresponds to mild jaundice (head/neck → arms/legs) and zone 5 is considered deep jaundice; use this to visualize bilirubin progression.",
        image: IMAGES.infographics.jaundiceOne
      },
      {
        title: "Transcutaneous Bilirubin",
        bullets: [
          "Take the highest level of head, chest and abdomen and record the highest of these three."
        ],
        image: IMAGES.infographics.jaundinceTwo
      },
      {
        image: IMAGES.infographics.jaundiceThree
      }
    ]
  },
  {
    key: "DangerSignsAssessment",
    sections: [
      {
        title: "Feel the trunk",
        image: IMAGES.infographics.feelTheTrunk
      },
      {
        title: "Measure capillary refill time",
        image: IMAGES.infographics.CapillaryTime
      },
      {
        title: "Feel the femoral pulse",
        image: IMAGES.infographics.feelFemoralPulse
      }
    ]
  },
  {
    key: "maternalSeroStatus",
    sections: [
      {
        title: "",
        image: IMAGES.infographics.maternalSero
      }
    ]
  },
  {
    key: "ReconsiderDischarge",
    sections: [
      {
        title: "Reassess ABCD and resucitate as necessary"
      },
      {
        title: "Re-check vital signes &/or weight"
      },
      {
        title: "Note - Criteria for discharge include:",
        bullets: ["1) Weights at least 1500g", "2) Able to breastfeed normally."]
      }
    ],
    footerNote: "The baby should not be discharged if vitals are outside normal ranges.",
    footerNoteType: "danger"
  }
];
function getInfographicByKey(key) {
  return neonatalInfographics.find((infographic) => infographic.key === key);
}
function getInfographicsByKeys(keys) {
  return neonatalInfographics.filter((infographic) => keys.includes(infographic.key));
}
function getAllInfographicKeys() {
  return neonatalInfographics.map((infographic) => infographic.key);
}

export { getAllInfographicKeys, getInfographicByKey, getInfographicsByKeys, neonatalInfographics };
