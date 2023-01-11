const mongoose = require('mongoose');
const { Schema } = mongoose;
const taskSchema = new Schema(
  {
    company_name: {
      type: String,
      require: true
    },
    chapter1: {
      type: String,
      require: true
    },
    description1: {
      type: String
    },
    chapter2: {
      type: String,
      require: true
    },
    description2: {
      type: String
    },

    // -------------------------------  Form 1

    form1: {
      form1_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form1_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form1_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form1_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 2

    form2: {
      form2_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form2_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form2_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form2_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form2_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form2_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 3

    form3: {
      form3_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form3_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form3_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },
    
    // -------------------------------  Form 4

    form4: {
      form4_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form4_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form4_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form4_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form4_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 5

    form5: {
      form5_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form5_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form5_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form5_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 6

    form6: {
      form6_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form6_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form6_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form6_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 7

    form7: {
      form7_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form7_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form7_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form7_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form7_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 8

    form8: {
      form8_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form8_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form8_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form8_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 9

    form9: {
      form9_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form9_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form9_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 10

    form10: {
      form10_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form10_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form10_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form10_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form10_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 11

    form11: {
      form11_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form11_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form11_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form11_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 12

    form12: {
      form12_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form12_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form12_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form12_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form12_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form12_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form12_7: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
    },

    // -------------------------------  Form 13

    form13: {
      form13_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form13_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form13_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form13_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form13_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form13_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 14

    form14: {
      form14_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form14_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form14_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 15

    form15: {
      form15_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form15_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 16

    form16: {
      form16_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form16_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form16_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form16_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form16_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form16_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 17

    form17: {
      form17_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form17_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 18

    form18: {
      form18_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form18_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form18_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form18_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form18_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form18_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 19

    form19: {
      form19_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form19_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form19_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form19_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 20

    form20: {
      form20_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form20_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form20_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 21

    form21: {
      form21_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form21_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form21_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form21_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form21_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
    },

    // -------------------------------  Form 22

    form22: {
      form22_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form22_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form22_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form22_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form22_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form22_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form22_7: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form22_8: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 23

    form23: {
      form23_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form23_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form23_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form23_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form23_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form23_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 24

    form24: {
      form24_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form24_2: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form24_3: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form24_4: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form24_5: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      },
      form24_6: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },

    // -------------------------------  Form 25

    form25: {
      form25_1: {
        currentAction: String,
        selected: String,
        options: Array,
        height: Number,
        moderate: Number,
        low: Number,
        aic: Number,
        total: Number
      }
    },
    
  },
  { collection: 'form' }
);

module.exports = mongoose.model('form', taskSchema);