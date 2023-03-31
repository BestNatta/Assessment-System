<template>
    <div>
        <div class="container mb-5 w-75 text-center">
            <h4 class="mb-5"><u>เกณฑ์การจัดระดับความสำคัญ</u></h4>
            <table id="tasks" class="ui celled compact table">
                <thead>
                    <tr>
                        <th class="th-lavel text-center"><b-icon icon="kanban" scale="1"></b-icon> ระดับความสำคัญ</th>
                        <th class="th-description text-center"><i class="info circle icon"></i>คำอธิบาย</th>
                    </tr>
                </thead>
                <tr>
                    <th class="th-height">สูง</th>
                    <td>ประเด็นที่การควบคุมภายในต้องได้รับการแก้ไขอย่างเร่งด่วน เนื่องจากเป็นการ
                        ควบคุมที่มีความสำคัญสูงตามแบบประเมินความเพียงพอของระบบการควบคุมภายใน
                        แต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่ยังไม่เพียงพอในประเด็นที่สำคัญ
                    </td>
                </tr>
                <tr>
                    <th class="th-moderate">ปานกลาง</th>
                    <td>ประเด็นที่การควบคุมภายในควรได้รับการแก้ไข เนื่องจากเป็นการควบคุมที่สำคัญตาม
                        แนวทางการควบคุมภายในที่ดีแต่บริษัทยังไม่ได้นำมาปฏิบัติหรือนำมาปฏิบัติแล้วแต่
                        ยังไม่เพียงพอ
                    </td>
                </tr>
                <tr>
                    <th class="th-low">ต่ำ</th>
                    <td>ประเด็นที่การควบคุมภายในมีความเพียงพอตามหลักการควบคุมภายใน ทำให้บริษัท
                        สามารถดำเนินการต่อไปตามปกติแต่ควรต้องได้รับการระวังในกรณีที่การดำเนินงาน
                        ของบริษัทมีการเปลี่ยนแปลงและทำให้ระดับความเสี่ยงของประเด็นนี้สูงขึ้น ผู้รายงาน
                        และติดตามประเด็นนี้ควรเป็นเจ้าของกระบวนการผู้ตรวจสอบภายในหรือผู้บริหารที่
                        เกี่ยวข้อง
                    </td>
                </tr>
                <tr>
                    <th class="th-aic">AIC</th>
                    <td>ระบบการควบคุมภายในที่มีอยู่ในปัจจุบันเพียงพอและมีประสิทธิผล
                        (Appropriate Internal Control)
                    </td>
                </tr>
            </table>
        </div>

        <div class="container">
            <b-row class="mt-5">
                <b-col class="text-center">
                    <h4><u>การควบคุมภายในระดับองค์กร(Entity-Level Controls: ELC)</u></h4>
                </b-col>
            </b-row>

            <div class="form-content">
                <section class="mb-4">
                    <header v-for="(mainForms, mainIndex) in this.getMainForm" :key="mainForms.id">
                        <div v-if="mainIndex === mainFormLength" class="text-center my-5">
                            <h4><u>การควบคุมภายในระดับกระบวนปฏิบัติงาน(Process-Level Controls : PLC)</u></h4>
                        </div>
                        <div class="d-flex mb-4">
                            <b-icon class="vue-icon" v-b-toggle="`collapse-${mainIndex}`"
                                icon="arrow-down-right-square-fill"></b-icon>
                            <div class="d-flex">
                                <h5 class="mr-1">{{ mainIndex + 1 }}. </h5>
                                <h5 v-if="mainIndex < mainFormLength">{{ mainForms.title }}</h5>
                            </div>
                            <textarea class="form-control" v-if="mainIndex >= mainFormLength"
                                v-model="mainTitle[mainIndex]"></textarea>
                        </div>
                        <b-collapse :id="`collapse-${mainIndex}`" class="mb-5">
                            <div class="container-form p-4" v-for="(subForms, subIndex) in mainForms.subForm"
                                :key="subForms.id">
                                <div>
                                    <p class="font-weight-normal">{{ getSubIndex(mainIndex,
                                        subIndex) }} </p>
                                    <p v-if="subFormLength[mainIndex] && subIndex < subFormLength[mainIndex]">{{
                                        subForms.title }}</p>

                                    <textarea class="form-control" v-model="subFormTitle[mainIndex][subIndex]"
                                        v-if="!subFormLength[mainIndex] || subIndex >= subFormLength[mainIndex]"></textarea>
                                </div>
                                <hr>
                                <!-- <textarea class="form-control" v-if="mainIndex >= mainFormLength"s
                                    v-model="subForms.subTitle"></textarea> -->

                                <div class="form-group">
                                    <label>ระดับความสำคัญ</label>
                                    <div class="d-flex justify-content-center con-check">
                                        <input type="radio" v-model="heightValue[mainIndex][subIndex]"
                                            :name="'options-' + mainIndex + '-' + subIndex" value="height"
                                            @change="changeCheck($event, mainIndex, subIndex)" />
                                        <label>Height</label>

                                        <input type="radio" v-model="moderateValue[mainIndex][subIndex]"
                                            :name="'options-' + mainIndex + '-' + subIndex" value="moderate"
                                            @change="changeCheck($event, mainIndex, subIndex)" />
                                        <label>Moderatet</label>

                                        <input type="radio" v-model="lowValue[mainIndex][subIndex]"
                                            :name="'options-' + mainIndex + '-' + subIndex" value="low"
                                            @change="changeCheck($event, mainIndex, subIndex)" />
                                        <label>Low</label>

                                        <input type="radio" v-model="aicValue[mainIndex][subIndex]"
                                            :name="'options-' + mainIndex + '-' + subIndex" value="aic"
                                            @change="changeCheck($event, mainIndex, subIndex)" />
                                        <label>Aic</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>กลุ่ม</label>
                                    <b-form-select class="custom-select" v-model="selected[mainIndex][subIndex]"
                                        :options="subForms.options" />
                                </div>
                                <div class="form-group">
                                    <label>การดำเนินการในปัจจุบัน</label>
                                    <textarea rows="4" class="form-control"
                                        v-model="operation[mainIndex][subIndex]"></textarea>
                                </div>
                                <div class="text-right mt-2" v-if="subIndex === getMainForm[mainIndex].subForm.length - 1">
                                    <button class="btn btn-info mr-1"
                                        @click.prevent="addSubForm(mainIndex, subIndex)">เพิ่ม</button>
                                    <button class="btn btn-danger" @click.prevent="deleteSubForm(mainIndex)">ลบ</button>
                                </div>
                            </div>
                        </b-collapse>

                        <b-row>
                            <b-col v-if="mainIndex === getMainForm.length - 1">
                                <button class="btn btn-info mr-1"
                                    @click.prevent="addMainForm(mainIndex)">เพิ่มรายการ</button>
                                <button class="btn btn-danger" @click.prevent="deleteMainForm(mainIndex)">ลบ</button>
                            </b-col>
                        </b-row>
                    </header>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import { api } from '../../helpers/Helpers';
export default {
    name: 'form-1',

    data() {
        return {
            getMainForm: [],
            // getSubForm: [],

            selected: [],
            operation: [],
            heightValue: [],
            moderateValue: [],
            lowValue: [],
            aicValue: [],

            mainTitle: [],
            subFormTitle: [],

            mainFormLength: 0,
            subFormLength: 0,
        }
    },

    async mounted() {
        const getApi = await api.gettasks();
        const getFormDefault = getApi.formDefaultTasks[0]
        this.getMainForm = getFormDefault.mainForm;

        this.initMainForm();

    },

    props: ['forms'],

    watch: {

        forms(newVal) {
            this.getMainForm = newVal.mainForm;
            if (this.getMainForm) {
                this.getMainForm.forEach(mainForm => {

                    mainForm.subForm.forEach(item => {
                        item.options = ["Board of Directors", "Management", "Operation"]
                    })
                })
                this.initMainForm();
            }
        },

        selected(newVal) {
            newVal.forEach((valueMain, mainIndex) => {
                valueMain.forEach((valueSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].selected = valueSub;
                    }
                })
            })
        },

        heightValue(newVal) {
            newVal.forEach((valueMain, mainIndex) => {
                valueMain.forEach((valueSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].height = valueSub;
                    }
                })
            })
        },

        moderateValue(newVal) {
            newVal.forEach((valueMain, mainIndex) => {
                valueMain.forEach((valueSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].moderate = valueSub;
                    }
                })
            })
        },

        lowValue(newVal) {
            newVal.forEach((valueMain, mainIndex) => {
                valueMain.forEach((valueSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].low = valueSub;
                    }
                })
            })
        },

        aicValue(newVal) {
            newVal.forEach((valueMain, mainIndex) => {
                valueMain.forEach((valueSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].aic = valueSub;
                    }
                })
            })
        },

        mainTitle: {
            handler(newVal) {
                newVal.forEach((title, index) => {
                    if (this.getMainForm[index]) {
                        this.getMainForm[index].title = title;
                        this.forms.mainForm[index].title = title;
                    }
                });
            },
            deep: true
        },

        subFormTitle(newVal) {
            newVal.forEach((titleMain, mainIndex) => {
                titleMain.forEach((titleSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].title = titleSub || getVal.title;
                    }
                })
            })
        },

        operation(newVal) {
            newVal.forEach((titleMain, mainIndex) => {
                titleMain.forEach((titleSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].operation = titleSub;
                    }
                })
            })
        }
    },

    methods: {
        loadSubFormArray() {
            const mainFormArray = [];

            this.getMainForm.forEach((mainForms, mainIndex) => {
                const formTitle1 = mainForms.mainTitle ? mainForms.title + mainForms.mainTitle : mainForms.title;

                const subFormArray = [];
                if (mainForms.subForm) {
                    mainForms.subForm.forEach((subForms, subIndex) => {
                        subFormArray.push({
                            title: this.subFormTitle[mainIndex] ? this.subFormTitle[mainIndex][subIndex] : '',
                            selected: this.selected[mainIndex][subIndex],
                            operation: this.operation[mainIndex][subIndex],
                            heightValue: this.heightValue[mainIndex][subIndex],
                            moderateValue: this.moderateValue[mainIndex][subIndex],
                            lowValue: this.lowValue[mainIndex][subIndex],
                            aicValue: this.aicValue[mainIndex][subIndex],
                        });
                    });
                }

                mainFormArray.push({
                    title: formTitle1,
                    subForm: subFormArray,
                });
            });

            this.forms.mainForm = mainFormArray;
        },

        changeCheck(event, mainIndex, subIndex) {
            const valueMap = {
                height: 1,
                moderate: 1,
                low: 1,
                aic: 1,
            };
            const value = valueMap[event.target.value];
            this.heightValue[mainIndex][subIndex] = event.target.value === 'height' ? value : 0;
            this.moderateValue[mainIndex][subIndex] = event.target.value === 'moderate' ? value : 0;
            this.lowValue[mainIndex][subIndex] = event.target.value === 'low' ? value : 0;
            this.aicValue[mainIndex][subIndex] = event.target.value === 'aic' ? value : 0;
            // this.loadSubFormArray();
        },

        getSubIndex(mainIndex, subIndex) {
            return (mainIndex + 1) + '.' + (subIndex + 1);
        },

        addMainForm(mainIndex) {
            const newMainForm = {
                title: this.mainTitle[mainIndex] || '',
                isOpen: true,
                subForm: [
                    {
                        title: '',
                        selected: '',
                        options: ["Board of Directors", "Management", "Operation"],
                        operation: '',
                        heightValue: '',
                        moderateValue: '',
                        lowValue: '',
                        aicValue: '',
                    }
                ]
            };
            this.getMainForm.push(newMainForm);
            // console.log(this.getMainForm);
            this.forms.mainForm.push(newMainForm);
            this.subFormTitle.push([''])
            this.heightValue.push(new Array())
            this.moderateValue.push(new Array())
            this.lowValue.push(new Array())
            this.aicValue.push(new Array())
            this.selected.push(new Array())
            this.operation.push(new Array())
        },

        addSubForm(mainIndex, subIndex) {
            const options = this.getMainForm[mainIndex].subForm[subIndex].options;

            const newSubForm = {
                title: '',
                selected: 'Board of Directors',
                options: options,
                operation: '',
                heightValue: '',
                moderateValue: '',
                lowValue: '',
                aicValue: '',
            }

            this.selected[mainIndex].push(newSubForm.selected);
            this.getMainForm[mainIndex].subForm.push(newSubForm);
            this.loadSubFormArray();
        },

        deleteMainForm(event) {
            if (confirm('คุณแน่ใจรึเปล่าที่จะลบ !')) {
                this.getMainForm.splice(this.getMainForm.indexOf(event), 1);
            }
        },

        deleteSubForm(subIndex, event) {
            if (confirm('คุณแน่ใจรึเปล่าที่จะลบ !')) {
                this.getMainForm[subIndex].subForm.splice(this.getMainForm[subIndex].subForm.indexOf(event), 1);
            }
        },

        initMainForm() {
            this.subFormTitle = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.title)
            })

            this.selected = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.selected);
            });

            this.options = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.options)
            })

            this.operation = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.operation);
            });

            this.heightValue = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.heightValue === 1 ? 'height' : '');
            });


            this.moderateValue = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.moderateValue === 1 ? 'moderate' : '');
            });

            this.lowValue = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.lowValue === 1 ? 'low' : '');
            });

            this.aicValue = this.getMainForm.map(mainForm => {
                return mainForm.subForm.map(subForm => subForm.aicValue === 1 ? 'aic' : '');
            });

            this.mainFormLength = this.getMainForm.length
            // console.log(this.mainFormLength);
            this.subFormLength = this.getMainForm.map((item) => item.subForm.length)
            this.loadSubFormArray();
        }
    },
}
</script>