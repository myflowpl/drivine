$(document).ready(function(){var $filter;var $container;var $containerClone;var $filterLink;var $filteredItems;$filter=$(".filterOptions li.active a").attr("class");$filterLink=$(".filterOptions li a");$container=$("ul.ourHolder");$containerClone=$container.clone();$filterLink.click(function(e){e.preventDefault();$(".filterOptions li").removeClass("active");$filter=$(this).attr("class").split(" ");$(this).parent().addClass("active");if($filter=="all"){$filteredItems=$containerClone.find("li")}else{$filteredItems=$containerClone.find("li[data-type~="+$filter+"]")}$container.quicksand($filteredItems,{duration:750,easing:"easeInOutCirc",adjustHeight:"dynamic"})})});