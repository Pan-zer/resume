Vue.component("navbox",{
	props:["cla","desc","jumps","items","titles"],
	template:`<div :class=cla @click="jumps(items)" :title="titles"><span :class="desc" aria-hidden="true"></span></div>`
});

Vue.component("lunbo",{
	template:
	`<div id="lunbo">
			<div id="lbBox">
				<img id="pic1" src="img/960a304e251f95cadb4c048cc2177f3e6709524a.jpg"/>
				<img id="pic2" src="img/u=1696016861,582663633&fm=214&gp=0.jpg"/>
				<img id="pic3" src="img/u=2718483490,106190974&fm=214&gp=0.jpg"/>
				
			</div>
	</div>`
	
});


Vue.component("about",{
	template:
	`<div id="about" class="about">
		<div id="basicInfo">
			<div id="ficePic">
				<img src="img/微信图片_20171108142707.jpg"/>
			</div>
			<p></p>
			<h2 class="name">你好，我是彭铮，也可以叫我Panzer</h2>
		</div>
		<div id="aboutMe">
			<p class="title">关于我 :</p>
			<p class="details">我希望找的职位是java工程师、前端工程师或者全栈工程师。我有扎实的前后端基础知识，前端方面原生js和vue较为突出，能熟练应用Vue框架进行前端项目开发，也熟练掌握SSH框架开发以及MySQL数据库操作。善于总结归纳，有较强的debug能力，善于独立思考并解决问题。为人乐观向上，与人交往有善。爱好是羽毛球。</p>
		</div>
	</div>`
	
});

Vue.component("resume",{
	template:
	`<div id="resume" class="resume">
		<div id="education">
			<p class="title">教育情况：</p>
			<div class="contact"><p>学历：本科 </p><p>专业：电子商务</p><p>毕业时间：2017年6月 </p></div>
			<div class="contact"><p>教育经历:培训 </p><p>专业：Java</p><p>毕业时间：2017年3月 </p></div>
		</div>
		
		<div id="skill">
			<p class="title">技术水平：</p>
			
			<div class="contact1">
					<div class="java">java</div>
					<div class="js">js</div>
					<div class="jq">jq</div>
					<div class="Vue.js">Vue.js</div>
					<div class="SSH">SSH</div>
					<div class="SSM">SVM</div>
			</div>
		
			<div class="contact">
					<div class="progress">
					  <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
					    80%
					  </div>
					</div>
					<div class="progress">
					  <div class="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
					    90%
					  </div>
					</div>
					<div class="progress">
					  <div class="progress-bar" role="progressbar" aria-valuenow="84" aria-valuemin="0" aria-valuemax="100" style="width: 84%;">
					    84%
					  </div>
					</div>
					<div class="progress">
					  <div class="progress-bar" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100" style="width: 89%;">
					    89%
					  </div>
					</div>
					<div class="progress">
					  <div class="progress-bar" role="progressbar" aria-valuenow="82" aria-valuemin="0" aria-valuemax="100" style="width: 82%;">
					    82%
					  </div>
					</div>
					<div class="progress">
					  <div class="progress-bar" role="progressbar" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style="width: 78%;">
					    78%
					  </div>
					</div>
			</div>
		</div>
		<div id="experience">
			<div class="title">行业经历：</div>
			<div class="contact">
				<p>2107年三月~2017六月: 报了培训班培训java </p>
				<p>2017年7月至今: 毕业后在海辰科技有限公司实习.主要工作内容是:</p>
				<p class="details" >   1、用Vue布局前端页面,以及实现部分交互功能;</p>
				<p class="details" >   2、用jq（js)和css实现前端页面交互以及动画效果;</p>
				<p class="details" >   3、用java及SSH框架参与后端项目小组开发;</p>
			</div>	
		</div>
	</div>`
	
});
Vue.component("works",{
	template:
	`<div id="works" class="works">
		<div id="firstproject">
			<img src="img/proj1.png" class="firpic"/>
			<p class="discription">一个自己制作的web端简历。这个作品主要是为了展示我的前端基础。
				（1）这个作品运用了vue.js。vue框架最大的特点是轻量级以及模块化，这使得主页面清晰简单。以及得益于其数据与视图的双向绑定，省去了许多DOM操作，便利了开发。
				（2）本页面的轮播动画、楼层索引使用的都是原生的js编程。
				（3）本页面也使用了bootstrap框架的辅助以实现快速开发。</p>
		</div>
		<div id="secondproject">
			<p class="discription">一个信息管理系统。这是我在实习期间参与的一个团队项目。该项目中我负责了：
				（1）项目的流程设计；
				（2）前端页面的实现；
				（3）利用SSH三大框架开发了盘源信息的模块，其中action类的配置使用了Convention插件的约定配置，以此提高协同开发的约定性，使项目更趋于同一稳定；
				（4）使用maven管理项目；
			</p>
				<img src="img/proj2.png" class="secpic"/>
		</div>
	</div>`
	
});

Vue.component("contact",{
	template:
	`<div id="contact" class="contact">
		<div class="box">
			<p class="title">联系方式：</p>
			<div class="content">
				<h3>Email:</h3>
				<p>rumplepz@gmail.com</p>
				<p>719798590@qq.com</p>
				<h3>联系电话：</h3>
				<p>132-3256-0820</p>
				<h3>社交：</h3>
				<p>QQ：719798590</p>
				
			</div>
		</div>
	</div>`
	
});