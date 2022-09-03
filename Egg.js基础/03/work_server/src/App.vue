<template>
  <div id="app">
    <!-- 消息为:{{studentList[0].name}} -->
    <el-button type="text" @click="dialogVisible = true">添加学生</el-button>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="300px">
        <el-form-item label="id">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="OnSubmit">确 定</el-button>
      </span>
    </el-dialog>


    <el-table :data="studentList" style="width: 100%">
      <el-table-column label="id" prop="id">
      </el-table-column>
      <el-table-column label="姓名" prop="name">
      </el-table-column>
      <el-table-column label="年龄" prop="age">
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      studentList: [],
      message:"",
      search:"",
      dialogVisible: false,
      form:{
        id:"",
        name:"",
        age:""
      },
      labelPosition:"top"
    }
  },
  methods: {
    handleDelete(id) {
      this.$confirm('此操作将永久删除该学生, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        axios.delete(`http://127.0.0.1:7001/student/${id}`).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getStudentList();
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    getStudentList()
    {
      axios.get("http://127.0.0.1:7001/student").then((res)=>{
        this.studentList = res.data;
      })
    },
    OnSubmit(){
      this.dialogVisible = false;
      axios.post("http://127.0.0.1:7001/student",{
        student:this.form
      }).then(()=>{
          this.getStudentList();
      })
    }
  },
  created(){
    this.getStudentList();
  },
}
</script>
