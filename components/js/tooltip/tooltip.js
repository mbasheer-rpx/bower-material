/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-dd14821
 */
!function(){"use strict";function t(t,e,i,n,o,l){function d(d,u,s,m){function f(e){f.value=!!e,f.queued||(e?(f.queued=!0,t(function(){d.visible=f.value,f.queued=!1},a)):t(function(){d.visible=!1}))}function h(){u.removeClass("md-hide"),b.attr("aria-describedby",u.attr("id")),c.append(u),i(function(){i(function(){v(),d.visible&&u.addClass("md-show")})})}function p(){u.removeClass("md-show").addClass("md-hide"),b.removeAttr("aria-describedby"),t(function(){d.visible||u.detach()},200,!1)}function v(){var t=u[0].getBoundingClientRect(),i=b[0].getBoundingClientRect();m&&(i.top+=m.$element.prop("scrollTop"),i.left+=m.$element.prop("scrollLeft"));var n="bottom",o={left:i.left+i.width/2-t.width/2,top:i.top+i.height};o.left=Math.min(o.left,e.innerWidth-t.width-r),o.left=Math.max(o.left,r),o.top+t.height>e.innerHeight&&(o.top=i.top-t.height,n="top"),u.css({top:o.top+"px",left:o.left+"px"}),u.attr("width-32",Math.ceil(t.width/32)),u.attr("md-direction",n)}l(u);var b=u.parent();u.detach(),u.attr("role","tooltip"),u.attr("id",s.id||"tooltip_"+o.nextUid()),b.on("focus mouseenter touchstart",function(){f(!0)}),b.on("blur mouseleave touchend touchcancel",function(){n.activeElement!==b[0]&&f(!1)}),d.$watch("visible",function(t){t?h():p()});var g=i.debounce(function(){d.visible&&v()});angular.element(e).on("resize",g),d.$on("$destroy",function(){d.visible=!1,u.remove(),angular.element(e).off("resize",g)})}var a=400,r=8,c=angular.element(document.body);return{restrict:"E",transclude:!0,require:"^?mdContent",template:'<div class="md-background"></div><div class="md-content" ng-transclude></div>',scope:{visible:"=?mdVisible"},link:d}}angular.module("material.components.tooltip",["material.core"]).directive("mdTooltip",t),t.$inject=["$timeout","$window","$$rAF","$document","$mdUtil","$mdTheming"]}();