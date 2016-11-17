var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","url":"./pages/about/","title":"About","tags":"misc"},{"text":"Solvespace 平面四連桿機構模擬 將所得到的點座標的.csv以Excel的畫圖，得到：","url":"./40423121-solvespace-ping-mian-si-lian-gan-ji-gou-mo-ni.html","title":"40423121 Solvespace 平面四連桿機構模擬","tags":"40423121"},{"text":"40423121.csv (請以滑鼠右鍵存檔) 40423121.slvs (請以滑鼠右鍵存檔)","url":"./2016fall-zuo-ye.html","title":"2016Fall 作業","tags":"40423121"},{"text":"","url":"./2016fall-zuo-ye-ying-pian.html","title":"2016Fall 作業影片","tags":"40423121"},{"text":"關鍵敘述: This is an angle bracket, with a radiused inside corner and a gusset. Both legs of the angle, and the gusset, are the same thickness. There are two equal-diameter mounting holes placed symmetrically on one of the legs. When we first run SolveSpace, we will begin with an empty part. Initially, our view of the part will be oriented onto the XY plane. The axes are also indicated by the three colored arrows at the bottom left; the X, Y, and Z axes are drawn in red, green, and blue respectively. To rotate our view of the part, click and drag with the center button (or the wheel) of the mouse. To pan, click and drag with the right mouse button. To zoom, use the mouse wheel, or choose View → Zoom In or Out. To return the view to the XY plane (so that our view is parallel to the XY plane, and centered at the origin), choose View → Align View to Workplane, or press W, or choose the equivalent button from the toolbar. (The toolbar button for \"Align View to Workplane\" is at the bottom right. We will construct this part by drawing the 2d cross-section of the angle, and extruding it to form the angle. We will then add the gusset using a Boolean union, and cut the mounting holes using a Boolean difference. So to start, we must sketch the profile of the angle. This is made from line segments, plus one arc (for the radiused inside corner). We will start with the line segments; so choose Sketch → Line Segment, or the equivalent button from the toolbar. To start the line, left-click. To end the line, left click again. A new line segment will automatically be created, that shares an endpoint with the old line segment. As we draw, SolveSpace will warn us that the profile is not yet a closed contour. It would also be possible to stop drawing by pressing Escape, or by right-clicking. The profile now consists of six line segments, that join at six endpoints. We can move any of these endpoints by left-dragging with the mouse, and the contour will remain closed. The \"not closed contour\" message has disappeared, and the area inside the contour is shaded in very dark blue. We hover the mouse over that bottom left point, so that it appears highlighted in yellow. We then left-click; the point now appears highlighted in red. This means that the point is selected. (To de-select the point, we could click it again, or press Escape, or select Edit → Unselect All. Similarly, we can select the origin by left-clicking it. In the text window, we see that two points are selected. We want those two points to be coincident. We can achieve this with a constraint. Choose Constrain → On Point / Curve / Plane to constrain point-on-point, or use the equivalent button on the toolbar. The origin can't move, so that bottom-left corner moves in order to satisfy the constraint. So hover the mouse over the bottom line segment, and left click so that the line is selected. The line will be drawn in red, and information about the line will be displayed in the text window; selection works the same for lines and curves as for points. Now choose Constrain → Horizontal, or use the equivalent button from the toolbar. The line is now horizontal, and a small magenta H is drawn to indicate the constraint. The H appears in yellow if we hover the mouse over it; that constraint can be selected (and then deleted, for example) in the same way as for entities. And constrain the two short endcaps to have equal length, so that the two legs of the angle will have equal thickness. (Select the two short line segments, and Choose Constrain → Equal Length / Radius / Angle. The constraint is drawn as a single short magenta line, perpendicular to each line segment. Select the inside corner point of the profile, so that it is highlighted in red. Then choose Sketch → Tangent Arc at Point; a tangent arc will automatically be created at that point. Drag the endpoints or center of the arc to change the radius. Note that if we drag a point beyond certain limits (that depend on the constraints that we have specified), the sketch may fail to solve, or it may solve to an unexpected solution. In that case, it is always possible to go back by choosing Edit → Undo. We can take our two-dimensional section, and extrude it to produce a three-dimensional solid. To do that, choose New Group → Extrude, or choose the equivalent button from the toolbar. This will create our extrusion. To see our extrusion, rotate the view by center-dragging with the mouse. In the text window, SolveSpace has automatically shown information about the extrusion that we've just created. (If it didn't then we could view that information by choosing the \"home\" link at the top left of the text window. We would then see a list of groups, including g003-extrude, the extrusion that we've just created. We could click on that name to view the same screen that is shown automatically. If the text window is not visible, then choose View → Show Text Window or press Tab.) We now wish to sketch the gusset. We will need to create a new sketch, in a new workplane. We can place the origin of that workplane at the midpoint of the inside corner of that angle. That point exists, but it is currently not visible, because it lies within the solid object that we have just extruded. To make it visible, we must show \"hidden lines\", by clicking that icon at the top far right of the text window. This causes all lines and points to be displayed, even if they lie within the solid model. (So it's as if the part becomes transparent.) We have left-clicked to select that point here, so it is highlighted in red. We then center-drag the view so that we are looking at the extrusion roughly on end, and choose New Group → Sketch in New Workplane. This creates a new workplane, with origin at the selected point, and parallel to the XY plane. (If no other information is provided, then SolveSpace snaps to the nearest workplane parallel to the coordinate axes; so it was important for us to rotate the view so that it was approximately correct before we created the workplane. Otherwise, SolveSpace might have snapped to the YZ plane or the (Y, -X) plane or some other plane instead.) The part is now complete, except for the two mounting holes. We can draw those as another extrusion; except this extrusion, instead of adding material, should remove material to cut the holes. We must again create a new workplane, in which we will draw our section to extrude. (Most parts will have this structure of alternating sketches and extrusions.) Before, we created our new workplane in terms of a single point, and then we let SolveSpace infer the orientation of the plane from the orientation of our view. That worked because our desired orientation was parallel to one of the coordinate planes. In this case, our desired plane is not parallel to a coordinate plane, because the angle bracket is not (necessarily) ninety degrees. So in addition to the point for the origin, we specify two line segments; the workplane will be defined so that both of the line segments are parallel to that plane. So select a point and two (non-parallel) lines on the back of the extrusion, for example the point and two lines shown below. Then choose New Group → Sketch in New Workplane. We want the circles to have the same radius/diameter, and to be placed symmetrically about the center of the part. Select each circle by hovering the mouse over it (so that it shows up highlighted in yellow) and then left-clicking. Then choose Constrain → Equal Radius. (Notice that the same menu item can be used to create many different kinds of constraint, depending on what is selected when we choose that menu item.) To place the circles symmetrically, select each circle's center. Then choose Constrain → Symmetric. The symmetry constraint is drawn as a pair of magenta arrows, pointing inwards. Each entry in the list corresponds to a group in the part. The first group is the references; that includes things like the XY plane and the origin. The references are created automatically, and cannot be modified. The first real group is g002-sketch-in-plane; when we started drawing, we were drawing in g002. This is a sketch-in-workplane group, where that workplane is parallel to the XY plane and centered at the origin. This solid model can be used in several different ways. We could just look at it, or export a screenshot using File → Export Bitmap. Or we could export a hidden-line-removed vector drawing, using File → Export 2d View. We could export a section of the solid by selecting a face of the model (to define the section plane), and then choosing File → Export 2d Section. We also could export the three-dimensional solid model itself, either as a triangle mesh or as a STEP file. Most CAM or rapid prototyping software expects some type of solid model as input. It's generally better to use STEP files when possible, since they represent curves and curved surfaces exactly (vs. triangle meshes, which are only an approximation). 上課手抄單字 http://i.imgur.com/wW3LbIi.jpg 認識單字 angle 角度 respectively 分別 rediused 半徑 equivalent 等同(一樣) Construct 建構 cross-section 截面 extruding 擠壓 union 聯合 Sketch 工程圖草圖 profile 斷面 segments 線段 equivalent 相等 automatically 自動 contour 輪廓 escape 離開 consists of 包含 join 連接 highlight 鮮明 coincident 一模一樣 achieve 達成 constraint 約束條件 satisfy 滿足 hover 掃過 information 資訊 displayed 顯示 indicate 表示 horizontal 水平 entities 實體 perpendicular 垂直 unexpected 出乎意料 two-dimensional 2D solid 實體 transparent 透明的 roughly 大概 approximately 大約 alternating 改變 STEP 圖檔格式 coordinate 座標 symmetrically 對稱 corresponds 對應 references 引用","url":"./40423121lin-bing-xian.html","title":"40423121林秉憲","tags":"40423121"},{"text":"知識管理與最佳化應用實驗室試圖利用計算機程式、網際內容管理、電腦輔助設計實習與協同產品設計實習等課程, 進行與機械設計相關的主題式教學, 其中包含強化創造力的教學、令學員熟習六種工程表達方式, 並且俱備融入協同設計所需要的四大面向知識與技能. 機械設計主題教學 創造力三元素, 機械設計的六種表達, 協同設計的四大面向. 強化創造能力 - 自學力、程式力與想像力 (Creative Competencies) 熟習六種表達 - 口語、文字、2D、3D、理論與實體表達 (Six Presentation Methods) 融入協同設計 - 電腦、網路、軟硬體工具與協同專案 (Collaborative Designs) 2016 Fall CADP A 分組網頁: 第1組 : 40223103 40223109 40423111 40443111 第2組 : 40423101 40423103 40423104 40423117 40423136 40423144 第3組 : 40423105 40423115 40423119 40423128 40423139 40423149 第4組 : 40423106 40423107 40423108 40423121 40423125 40423140 第5組 : 40423109 40423110 40423113 40423130 40423131 40423138 第6組 : 40423112 40423116 40423118 40423127 40423137 40423152 第7組 : 40423114 40423115 40423120 40423122 40423124 第8組 : 40423123 40423129 40423132 40423133 40423155 40423157 第9組 : 40423126 40423135 40423150 40423154 第10組 : 40423141 40423143 40423145 40423146 40423147 40423148 以下為分組資料處理程式: content = open(\"2016fall_cadp_a_groups.txt\").read() #print(content) result = content.splitlines() #print(result) gno = 1 for i in range(len(result)): #print(result[i]) group = result[i].split(\":\") #列出組序 print(\"<a href='../g\"+str(gno)+\"'>第\"+str(gno)+\"組</a>:<br />\") #print(\"第\"+str(gno)+\"組:<br />\") #取 group 第2成員, 用逗點隔開納入數列後, 利用[:-1]去掉最後空白 #print(group[1].split(\",\")[:-1]) gmember = group[1].split(\",\")[:-1] for j in range(len(gmember)): #print(gmember[j]) print(\"<a href='../g\"+str(gno)+\"/\"+str(gmember[j])+\"'>\"+ \\ str(gmember[j])+\"</a> \") print(\"<br />\") gno = gno + 1","url":"./2016fall-ji-jie-she-ji-zhu-ti-jiao-xue.html","title":"2016Fall 機械設計主題教學","tags":"Misc"}]};