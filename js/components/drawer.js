(function(){



	new component('drawer', {
		'componentConstruct': function(){
			var self = this;
			console.log('drawer construct1', self);
			self.detached = function(){
				var inst = component.componentInstance(self.codename);
				var tagName = 'div';
				var $e = $('<'+tagName+'></'+tagName+'>');
				$e.attr('drawer', 'true');
				//$e.appendTo($container);
				return component.replace($e.get(0), inst, true); // true = isInstance, return instance
			}
		},
		'render': function(){
			var self = this;
			self.overlay = component('overlay').personal();
			self.overlay.$e.append(self.$e);
			self.overlay.$e.css({
				'left': '',
				'right': '',
				'bottom': '',
				'top': '0',
				'position': 'absolute'
			});
			$('body').css({
				'overflow': 'auto'
			});
			self.overlay.detach();
			self.overlay.$e.show();
			self.$e.css({
				'position': 'fixed',
				'width': '300px',
				'top': '0',
				'bottom': '0',
				'overflow': 'hidden',
				'overflow-y': 'auto',
				'background': '#fff',
				'padding-bottom': '50px'
			});
			self.$container = $(document.createElement('div'));
			self.$container.css({
				'padding': '1em 20px',
				'min-height': '110%',
			});
			self.$e.append(self.$container);
			var opened = false;
			var mouseover = false;
			self.$e.on('mouseenter', function(e){
				mouseover = true;
			});
			self.$e.on('mouseleave', function(e){
				mouseover = false;
			});
			$(document).on('scroll', function(e){
				if (!opened){
					return;
				}
				if (!mouseover){
					return;
				}
				if ($.contains(self.e, e.target)){
					return; // scroll target is inside drawer, do not prevent
				}
				e.preventDefault();
				e.stopPropagation();
			});
			/*$(document).on('scroll', function(e){
				e.preventDefault();
				e.stopPropagation();
			});*/
			self.append = function(el){
				self.$container.append(el);
			};
			self.left = function(){
				self.$e.css({
					'left': 0,
					'box-shadow': '5px 10px 15px 5px rgba(0,0,0,.1)'
				});
			}
			self.open = function(){
				self.overlay.reattach();
				opened = true;
			}
			self.close = function(){
				self.overlay.detach();
				opened = false;
			}
		},
		'service': function(){

		}
	});
})();
