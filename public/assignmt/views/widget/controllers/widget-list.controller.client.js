(function (){

   angular.module ("WamApp")
       .controller("widgetListController",widgetListController);

   function widgetListController($sce) {
        var model = this;
        model.trustHtmlContent = trustHtmlContent;
        model.trustUrlResource = trustUrlResource;
        model.getWingetIncludeUrl =  getWingetIncludeUrl;

        function init(){
            model.hello = "hello frm widget";
            model.widgets = [
                { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
                { "_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                    "url": "http://lorempixel.com/400/200/"},
                { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": '<p>Look, there’s a reason why, when Genndy Tartakovsky was going to make a CG Popeye movie, <a href="https://io9.gizmodo.com/the-first-look-at-the-computer-animated-popeye-is-so-s-1636533934" target="_blank" rel="noopener" onclick="window.ga(\'send\', \'event\', \'Embedded Url\', \'Internal link\', \'https://io9.gizmodo.com/the-first-look-at-the-computer-animated-popeye-is-so-s-1636533934\', {metric25:1})">he went for a 3D recreation of the classic cartoon art</a>. The world is not—and arguably never will be—prepared for Realistic Popeye, as this action figure amazingly, terrifyingly shows.<br><span class="read-more-placeholder"></span></p>'},
                { "_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                    "url": "https://youtu.be/AM2Ivdi9c4E" },
                { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
            ];
        }
        init();

        function trustHtmlContent(htmlContent){
            return $sce.trustAsHtml(htmlContent);
        }


        function trustUrlResource(url){
            console.log(url);
            var youtubeUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split("/");
            youtubeUrl += urlParts[urlParts.length - 1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }
        function getWingetIncludeUrl(widgetType) {
            return "views/widget/templates/widgets/widgets-"+ widgetType +".view.client.html"


        }

   }

   })();


