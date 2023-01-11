<template>
    <div>
        <b-row class="mb-4">
            <b-col class="text-center">
                <h2>สร้างเอกสารประเมิน</h2>
            </b-col>
        </b-row>
        <div class="text-center mb-4">
        </div>
        <form-input @formInput="createOrUpdate" :forms="this.forms" />
    </div>
</template>

<script>
import { api } from "../helpers/Helpers";
import formInput from '../views/forms/formInput.vue'
export default {
    name: 'Create',
    components: {
        'form-input': formInput,
    },
    data() {
        return {
            forms: {
                company_name: '',
                chapter1: '',
                description1: '',
                chapter2: '',
                description2: '',
                form1: {
                    form1_1: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: '',
                    },
                    form1_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form1_3: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form1_4: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                },
                form2: {
                    form2_1: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form2_2: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form2_3: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form2_4: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form2_5: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form2_6: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form3: {
                    form3_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form3_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form3_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form4: {
                    form4_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form4_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form4_3: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form4_4: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form4_5: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form5: {
                    form5_1: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form5_2: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form5_3: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form5_4: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form6: {
                    form6_1: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form6_2: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form6_3: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form6_4: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form7: {
                    form7_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form7_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form7_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form7_4: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form7_5: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form8: {
                    form8_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form8_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form8_3: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form8_4: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form9: {
                    form9_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form9_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form9_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form10: {
                    form10_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form10_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form10_3: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form10_4: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form10_5: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form11: {
                    form11_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form11_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form11_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form11_4: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form12: {
                    form12_1: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form12_2: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form12_3: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form12_4: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form12_5: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form12_6: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form12_7: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                },
                form13: {
                    form13_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form13_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form13_3: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form13_4: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form13_5: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form13_6: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form14: {
                    form14_1: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form14_2: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form14_3: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form15: {
                    form15_1: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form15_2: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form16: {
                    form16_1: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form16_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form16_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form16_4: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form16_5: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form16_6: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form17: {
                    form17_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form17_2: {
                        currentAction: '',
                        selected: 'Board of Directors',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form18: {
                    form18_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form18_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form18_3: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form18_4: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form18_5: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form18_6: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form19: {
                    form19_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form19_2: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form19_3: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form19_4: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form20: {
                    form20_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form20_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form20_3: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form21: {
                    form21_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form21_2: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form21_3: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form21_4: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form21_5: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                },
                form22: {
                    form22_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form22_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form22_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form22_4: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form22_5: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form22_6: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form22_7: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form22_8: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form23: {
                    form23_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form23_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form23_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form23_4: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form23_5: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form23_6: {
                        currentAction: '',
                        selected: 'Operation',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form24: {
                    form24_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form24_2: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form24_3: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form24_4: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form24_5: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    },
                    form24_6: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
                form25: {
                    form25_1: {
                        currentAction: '',
                        selected: 'Management',
                        options: [
                            { value: 'Board of Directors', text: 'Board of Directors' },
                            { value: 'Management', text: 'Management' },
                            { value: 'Operation', text: 'Operation' },
                        ],
                        height: '',
                        moderate: '',
                        low: '',
                        aic: '',
                        total: ''
                    }
                },
            }
        };
    },
    methods: {
        createOrUpdate: async function (task) {
            const res = await api.createtask(task);
            this.flash("task created", "success");
            this.$router.push(`/tasks/${res._id}/result`);
        },
    },

}
</script>