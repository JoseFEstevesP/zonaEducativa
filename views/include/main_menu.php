<section class="main_menu" id="main_menu">
	<div class="main_menu__con_tc">
		<div class="main_menu__inicioSeccion " id="initSecion">
			<i class="fas fa-user-circle"></i>
			<!-- main_menu__inicioSeccion--sectionActive -->
		</div>
		<div class="main_menu__con-titel">
			<a href="<?= base_url(); ?>" class="main_menu__titel">Z.E.D.C</a>
		</div>
		<div class="main_menu__con_icon" id="btn-icon">
			<div class="main_menu__icon"></div>
		</div>
	</div>
	<nav class="menu" id="menu">
		<ul class="menu__ul">
			<li class="menu__enlace ">
				<a href="#" class="menu__link open-sub-menu">Tablas de usuarios</a>
			<nav class="menu__subMenu"> 
				<ul class="menu__submenu-ul">
					<li class="menu__submenu-li">
						<a href="<?= base_url(); ?>roles" class="menu__submenu-enlace">Roles</a>
					</li>
					<li class="menu__submenu-li">
						<a href="" class="menu__submenu-enlace">Usuarios</a>
					</li>
				</ul>
			</nav>	
			</li>
			<li class="menu__enlace ">
				<a href="#" class="menu__link open-sub-menu">Conócenos</a>
				<nav class="menu__subMenu">  
					<ul class="menu__submenu-ul">
						<li class="menu__submenu-li">
							<a href="" class="menu__submenu-enlace">Historia</a>
						</li>
						<li class="menu__submenu-li">
							<a href="" class="menu__submenu-enlace">Mision, Visión y Objetivos</a>
						</li>
					</ul>
				</nav> 
			</li>
			<li class="menu__enlace" >
				<a href="#" class="menu__link">Noticias</a>
			</li>
			<li class="menu__enlace" >
					<a href="#" class="menu__link">Publicar noticias</a>
			</li>
		</ul>
	</nav>
</section>
