<template>
  <el-container>
    <el-aside width="200px" style="background:#545c64;text-align:left;">

      <!-- collapse 是否水平折叠 -->
      <el-menu default-active="2" class="el-menu-vertical-demo" style="background:#545c64;">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">基础数据管理</span>
        </el-menu-item>
        <el-menu-item index="2" >
          <i class="el-icon-menu"></i>
          <span slot="title">系统管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">考卷管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">考试管理</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>设置</el-header>
      <el-container>
        <el-aside width="200px" >
          <el-menu default-active="1" class="el-menu-vertical-demo" >
            <el-menu-item index="1">
              <span slot="title">数据字典管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">题目类别管理</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">题型管理</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">题目管理</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">组卷配置管理</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title">试卷模板管理</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header>HEADER</el-header>
          <el-container>
            <el-main>
              <el-page-header content="详情页面"></el-page-header>

              <el-row class="rowTop" :gutter="30" height="10px;">
                <el-form :inline="true" :model="filters">
                  <el-col :span="5">
                    <el-form-item label="字典名称：">
                      <el-input v-model="select.name" size="small" class="inputTop1"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="字典类型：">
                      <el-input v-model="select.category" size="small" class="inputTop1"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="启用标记：">
                      <el-input v-model="select.status" size="small" class="inputTop1" placeholder="请输入启用或者停用"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="4">
                    <el-form-item>
                      <el-button type="primary" @click="selectDictionaryList">查询</el-button>
                    </el-form-item>
                  </el-col>
                </el-form>
              </el-row>
              <el-row :gutter="10" height="10px;">
                <el-button size="mini" @click="addDictionary">增加</el-button>
                <el-button size="mini" @click="deleteDictionary">删除</el-button>
                <el-button size="mini" @click="editDictionary">修改</el-button>
                <el-button size="mini">导入</el-button>
                <el-button size="mini">导出</el-button>
              </el-row>

              <el-table
                :data="dictionaryList"
                style="width: 100%"
                border
                show-overflow-tooltip="false"
                stripe
              >
                <el-table-column type="selection" width="55"></el-table-column>

                <el-table-column prop="name" label="字典名称" width="100" show-overflow-tooltip="false"></el-table-column>
                <el-table-column
                  prop="category"
                  label="字典类型"
                  width="100"
                  show-overflow-tooltip="false"
                ></el-table-column>
                <el-table-column prop="value" label="字典值" width="100" show-overflow-tooltip="false"></el-table-column>
                <el-table-column
                  prop="updatedTime"
                  label="更新时间"
                  width="100"
                  show-overflow-tooltip="false"
                ></el-table-column>
                <el-table-column
                  prop="remark"
                  label="备注信息"
                  width="100"
                  show-overflow-tooltip="false"
                ></el-table-column>
                <el-table-column prop="status" label="状态" width="100" show-overflow-tooltip="false" :formatter = "statusFormat"> </el-table-column>
                <!--第二步  开始进行修改和查询操作-->
                <el-table-column label="操作" align="center" min-width="100">
                  <template slot-scope="scope">
                    <el-button type="text" @click="addDictionary()">
                      <i class="el-icon-plus"></i>
                    </el-button>
                    <el-button type="text" @click="deleteDictionary(scope.row)">
                      <i class="el-icon-delete"></i>
                    </el-button>
                    <el-button type="text" @click="editDictionary(scope.row)">
                      <i class="el-icon-edit"></i>
                    </el-button>
                  </template>
                </el-table-column>
                <!--编辑与增加的页面-->
              </el-table>

              <!-- 增加操作 -->
              <el-dialog
                title="记录"
                :visible.sync="addDialogVisible"
                width="50%"
                :close-on-click-modal="false"
              >
                <el-form :model="addFormData" :rules="rules2" ref="addFormData" label-width="200px">
                  <el-form-item prop="name" label="字典名称:" required="true">
                    <el-input type="text" v-model="addFormData.name" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item prop="category" label="字典类型:" required="true">
                    <el-input type="text" v-model="addFormData.category" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item prop="value" label="字典值:" required="true">
                    <el-input type="text" v-model="addFormData.value" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item prop="status" label="是否启用:" required="true">
                    <el-radio v-model="addFormData.status" label="1">是</el-radio>
                    <el-radio v-model="addFormData.status" label="0">否</el-radio>
                  </el-form-item>
                  <el-form-item prop="remark" label="备注信息:">
                    <el-input type="text" v-model="addFormData.remark" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click.native="addCancel">取 消</el-button>
                  <el-button v-if="addSubmitView" type="primary" @click.native="addSubmit">保存</el-button>
                </span>
              </el-dialog>
              <!-- 修改操作 -->
              <el-dialog
                title="记录"
                :visible.sync="editDialogVisible"
                width="50%"
                :close-on-click-modal="false"
              >
                <el-form
                  :model="addFormData"
                  :rules="rules2"
                  ref="editFormData"
                  label-width="200px"
                >
                  <el-form-item prop="name" label="字典名称:" :required="true">
                    <el-input type="text" v-model="editFormData.name" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item prop="category" label="字典类型:" :required="true">
                    <el-input type="text" v-model="editFormData.category" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item prop="value" label="字典值:" :required="true">
                    <el-input type="text" v-model="editFormData.value" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item prop="status" label="是否启用:" :required="true">
                    <el-radio v-model="editFormData.status" label="1">是</el-radio>
                    <el-radio v-model="editFormData.status" label="0">否</el-radio>
                  </el-form-item>
                  <el-form-item prop="remark" label="备注信息:">
                    <el-input type="text" v-model="editFormData.remark" auto-complete="off"></el-input>
                  </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                  <el-button @click.native="editCancel">取 消</el-button>
                  <el-button v-if="editSubmitView" type="primary" @click.native="editSubmit">保存</el-button>
                </span>
              </el-dialog>
              <el-footer>
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-sizes="[10]"
                  :page-size="pagesize"
                  layout="total,jumper,prev, pager, next,sizes"
                  :total="files_count"
                ></el-pagination>
              </el-footer>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import api from "../api/api";
import axios from "axios";
import qs from "qs";
export default {
  name: "DictionaryList",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      dictionaryList: [], //显示的数据
      addFormData: {
        //增加界面的值
        name: "",
        category: "",
        value: "",
        status: "1",
        remark: "",
        createdBy: 1
      },
      addDialogVisible: false, //增加界面是否显示
      addSubmitView: false,

      editFormData: {
        categoryId: "",
        name: "",
        category: "",
        value: "",
        status: 1,
        remark: "",
        updatedBy: 1
      },
      editDialogVisible: false, //修改界面是否显示
      editSubmitView: false,
      select: {
        name: "",
        category: "",
        status: "",
        index: 1
      },
      currentPage: 1,//第几页
      pageSize: 10,//一页多少条记录
      currentTotal: 0,//总共多少页
      files_count:1000//总的条数
    };
  },
  mounted: function() {
    this.loadData();
  },
  methods: {
    statusFormat(row, column){
      if (row.status === 0) {
          return '停用'
        } else if (row.status === 1) {
          return '启用'
        } 
    },
    loadData() {
      var that = this;
      axios.post("/dictionary/queryList", this.select).then(result => {
        that.dictionaryList = result.data.data;
        if(that.dictionaryList.length < that.pageSize){
          that.files_count = Number(that.pageSize) * Number(that.currentPage)
        }
      });
    },
    selectDictionaryList() {
      if(this.select.status != "停用" && this.select.status != "启用"){
        alert("输入错误，应该输入“启用”或者“停用”！");
      }
      var that = this;
      axios.post("/dictionary/queryList", this.select).then(result => {
        that.dictionaryList = result.data.data;
      });
    },
    addDictionary() {
      this.addSubmitView = true;
      this.addDialogVisible = true;
    },
    deleteDictionary(rowData) {
      var deleteFormData = Object.assign({}, rowData);
      deleteFormData.updatedBy = 1;
      var that = this;
      axios
        .post("/dictionary/deleteByPrimaryKey", deleteFormData)
        .then(result => {
          if (result.data.errCode == 1) {
            alert("删除成功");
            that.loadData();
          } else {
            alert(result.data.errMessage);
          }
        });
    },
    editDictionary(rowData) {
      this.editFormData = Object.assign({}, rowData);
      this.editFormData.status = this.editFormData.status.toString();
      this.editDialogVisible = true;
      this.editSubmitView = true;
    },
    addSubmit() {
      if ("" == this.addFormData.name || null == this.addFormData.name) {
        alert("字典名称为空");
        return false;
      }
      if (
        "" == this.addFormData.category ||
        null == this.addFormData.category
      ) {
        alert("字典类型为空");
        return false;
      }
      if ("" == this.addFormData.value || null == this.addFormData.value) {
        alert("字典值为空");
        return false;
      }
      if ("" == this.addFormData.status || null == this.addFormData.status) {
        alert("是否启用未选中");
        return false;
      }
      var that = this;
      axios
        .post("/dictionary/saveUseGeneratedKeys", this.addFormData)
        .then(result => {
          if (result.data.errCode == 1) {
            alert("增加成功");
            that.addCancel();
            that.loadData();
          } else {
            alert(result.data.errMessage);
          }
        });
    },
    addCancel() {
      this.addSubmitView = false;
      this.addDialogVisible = false;
      this.addFormData = {
        name: "",
        category: "",
        value: "",
        status: 0,
        remark: ""
      };
    },
    editSubmit(rowData) {
      if ("" == this.editFormData.name || null == this.editFormData.name) {
        alert("字典名称为空");
        return false;
      }
      if (
        "" == this.editFormData.category ||
        null == this.editFormData.category
      ) {
        alert("字典类型为空");
        return false;
      }
      if ("" == this.editFormData.value || null == this.editFormData.value) {
        alert("字典值为空");
        return false;
      }
      if ("" == this.editFormData.status || null == this.editFormData.status) {
        alert("是否启用未选中");
        return false;
      }
var that = this;
      axios
        .post("/dictionary/updateByPrimaryKeySelective", this.editFormData)
        .then(result => {
          if (result.data.errCode == 1) {
            alert("修改成功");
            that.editCancel();
            that.loadData();
          } else {
            alert(result.data.errMessage);
          }
        });
    },
    editCancel() {
      this.editSubmitView = false;
      this.editDialogVisible = false;
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.select.index = val;
      this.loadData();
      console.log(`当前页: ${val}`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
body {
  background: white;
}
.rowTop {
  border-bottom: gray 1px solid;
}
input {
  width: 200px;
  height: 20px;
  border-radius: 5px;
}
.inputTop1 {
  width: 120px;
}

.inputText {
  width: 400px;
  height: 30px;
}
</style>