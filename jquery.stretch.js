!function(a){a.fn.stretch=function(b){return b=a.extend({},a.fn.stretch.defaults,b),b.max>=0&&b.min>=0||(b.min=b.max=0),this.each(function(){var c=a(this),d=c.find("> .stretch--handle");c.hasClass("stretch--resizer")&&d||(d=a(this).wrap("<span class='stretch--handle' />").parent(),c=d.wrap("<div class='stretch--resizer' />").parent(),d.css("margin","0").css("padding","0"),c.css("margin","0").css("padding","0"),c.css("white-space","nowrap").css("overflow","hidden"));var f,e=c.width(),g=b.min||1,h=g;if(b.max)h=b.max,g==h&&c.css("font-size",h+"px");else do{g=h,h*=2,c.css("font-size",h+"px");var i=d.width();f=i<=f?e:i}while(f<e);if(f!=e){for(;g<h;){var j=Math.floor((g+h)/2);if(c.css("font-size",j+"px"),f=d.width(),f==e)break;f<e?g=j+1:h=j}f>e&&c.css("font-size",h-1+"px");var k=0,l=d.width(),m=b.maxSpacing;do k+=1,c.css("word-spacing",k+"px"),f=d.width();while(k<=m&&f<=e&&f>l);c.css("word-spacing",k-1+"px")}}),this},a.fn.stretch.defaults={min:0,max:0,maxSpacing:0}}(jQuery);
