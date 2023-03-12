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
                        <div v-if="mainIndex == 17" class="text-center my-5">
                            <h4><u>การควบคุมภายในระดับกระบวนปฏิบัติงาน(Process-Level Controls : PLC)</u></h4>
                        </div>
                        <div class="d-flex mb-4">
                            <b-icon class="vue-icon" v-b-toggle="`collapse-${mainIndex}`"
                                icon="arrow-down-right-square-fill"></b-icon>
                            <div class="d-flex">
                                <h5 class="mr-1">{{ mainIndex + 1 }}. </h5>
                                <h5 v-if="mainIndex < 17"> {{ mainForms.title }}</h5>
                            </div>
                            <textarea class="form-control" v-if="mainIndex >= mainFormLength"
                                v-model="mainTitle[mainIndex]"></textarea>

                        </div>
                        <b-collapse v-model="mainForms.isOpen" :id="`collapse-${mainIndex}`" class="mb-5">
                            <div class="container-form p-4" v-for="(subForms, subIndex) in mainForms.subForm"
                                :key="subForms.id">
                                <div>
                                    <p class="font-weight-normal">{{ getSubIndex(mainIndex, subIndex) }} </p>
                                    <p>{{ subForms.title }}</p>

                                    <textarea class="form-control" v-model="subFormTitle[mainIndex][subIndex]"
                                        v-if="subIndex >= subFormLength[mainIndex]"></textarea>
                                </div>
                                <hr>

                                <textarea class="form-control" v-if="mainIndex >= 17"
                                    v-model="subForms.subTitle"></textarea>
                                <div class="form-group">
                                    <label>ระดับความสำคัญ</label>
                                    <div class="d-flex">
                                        <input type="radio" :id="'height-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex"
                                            v-model="heightValue[mainIndex][subIndex]"
                                            @change="onRadioChange(mainIndex, subIndex, 'heightValue')" value="1">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">Height</label>

                                        <input type="radio" :id="'moderate-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex"
                                            v-model="moderateValue[mainIndex][subIndex]"
                                            @change="onRadioChange(mainIndex, subIndex, 'moderateValue')" value="1">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">Moderate</label>

                                        <input type="radio" :id="'height-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex"
                                            v-model="lowValue[mainIndex][subIndex]"
                                            @change="onRadioChange(mainIndex, subIndex, 'lowValue')" value="1">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">Low</label>

                                        <input type="radio" :id="'height-' + mainIndex + '-' + subIndex"
                                            :name="'lavel-' + mainIndex + '-' + subIndex"
                                            v-model="aicValue[mainIndex][subIndex]"
                                            @change="onRadioChange(mainIndex, subIndex, 'aicValue')" value="1">
                                        <label :for="'height-' + mainIndex + '-' + subIndex">AIC</label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>กลุ่ม</label>
                                    <b-form-select class="custom-select" v-model="selected[mainIndex][subIndex]"
                                        :options="subForms.options">
                                    </b-form-select>
                                </div>
                                <div class="form-group">
                                    <label>การดำเนินการในปัจจุบัน</label>
                                    <textarea rows="4" class="form-control"
                                        v-model="operation[mainIndex][subIndex]"></textarea>
                                </div>
                                <div class="text-right mt-2">
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
            getSubForm: [],

            selected: [],
            operation: [],
            heightValue: [],
            moderateValue: [],
            lowValue: [],
            aicValue: [],

            titleSubForm: 0,
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

        this.subFormTitle = this.getMainForm.map(mainForm => {
            return mainForm.subForm.map(subForm => subForm.title)
        })
        console.log(this.subFormTitle);

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
            return mainForm.subForm.map(subForm => subForm.heightValue);
        });

        this.moderateValue = this.getMainForm.map(mainForm => {
            return mainForm.subForm.map(subForm => subForm.moderateValue);
        });

        this.lowValue = this.getMainForm.map(mainForm => {
            return mainForm.subForm.map(subForm => subForm.lowValue);
        });

        this.aicValue = this.getMainForm.map(mainForm => {
            return mainForm.subForm.map(subForm => subForm.aicValue);
        });

        this.mainFormLength = this.getMainForm.length
        this.subFormLength = this.getMainForm.map((item) => item.subForm.length)
        this.loadSubFormArray();
    },

    props: ['forms'],

    watch: {
        // selected: function () {
        //     this.loadSubFormArray();
        // },
        selected(newVal) {
            // console.log(newVal);
            newVal.forEach((valueMain, mainIndex) => {
                valueMain.forEach((valueSub, subIndex) => {
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex];
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].selected = valueSub
                    }
                })
            })
        },

        heightValue: function () {
            this.loadSubFormArray();
        },

        moderateValue: function () {
            this.loadSubFormArray();
        },

        lowValue: function () {
            this.loadSubFormArray();
        },

        aicValue: function () {
            this.loadSubFormArray();
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
                    const getVal = this.getMainForm[mainIndex].subForm[subIndex]
                    if (getVal) {
                        this.forms.mainForm[mainIndex].subForm[subIndex].title = titleSub || getVal.title
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
                        const formTitle2 = subForms.subTitle ? subForms.title + subForms.subTitle : subForms.title;

                        subFormArray.push({
                            title: formTitle2,
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

        onRadioChange(mainIndex, subIndex, optionIndex) {
            // this[optionIndex][mainIndex][subIndex] = 1;

            // if (optionIndex === 'heightValue') {
            //     this.heightValue[mainIndex][subIndex] = 0;
            // } else if (optionIndex === 'moderateValue') {
            //     this.moderateValue[mainIndex][subIndex] = 0;
            // } else if (optionIndex === 'lowValue') {
            //     this.lowValue[mainIndex][subIndex] = 0;
            // } else if (optionIndex === 'aicValue') {
            //     this.aicValue[mainIndex][subIndex] = 0;
            // }
            if (optionIndex === 'heightValue') {
                this.heightValue[mainIndex].fill(0);
            } else if (optionIndex === 'moderateValue') {
                this.moderateValue[mainIndex].fill(0);
            } else if (optionIndex === 'lowValue') {
                this.lowValue[mainIndex].fill(0);
            } else if (optionIndex === 'aicValue') {
                this.aicValue[mainIndex].fill(0);
            }

            // Set the clicked radio button value to 1
            this[optionIndex][mainIndex][subIndex] = 1;
        },

        getSubIndex(mainIndex, subIndex) {
            return (mainIndex + 1) + '.' + (subIndex + 1);
        },

        addMainForm(mainIndex) {
            const newMainForm = {
                title: this.mainTitle[mainIndex] || '',
                isOpen: true,
            };
            this.getMainForm.push(newMainForm);
            this.forms.mainForm.push(newMainForm);
            this.loadSubFormArray();
        },

        addSubForm(mainIndex, subIndex) {
            const newSubForm = {
                title: this.subFormTitle[mainIndex][subIndex] || '',
                selected: this.selected[mainIndex][subIndex] || ['Board of Directors'],
                options: this.options[mainIndex][subIndex] || ['Board of Directors', 'Managment', 'Opertion'],
                operation: this.operation[mainIndex][subIndex],
                heightValue: '',
                moderateValue: '',
                lowValue: '',
                aicValue: '',
            }
            // console.log(newSubForm);
            this.getMainForm[mainIndex].subForm.push(newSubForm);    // ติดตรงที่ เวลามีการ add item ใหม่ ค่า title จะถูกส่งไป index ใหม่ด้วย (ผิด)
            // this.forms.mainForm[subIndex].subForm.push(newSubForm)
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
    },
} 
</script>