
var constants = function() {

    
    return {
        GARDEN_SERVICE_TYPE_SCHEDULED:"SCHEDULED",
        GARDEN_SERVICE_TYPE_OPEN:"OPEN",

        TASK_SPECIAL_CODE: "9999",        
        TASK_DONE: "DONE",
        TASK_NA: "NA",
        TASK_SKIP: "SKIP",
        TASK_CREATED:"CREATED",
        TASK_READY:"READY",

        VISIT_STATUS_INPROGRESS:"IN PROGRESS",
        VISIT_STATUS_CLOSED:"CLOSED",


        TASK_TYPE_SCHEDULED:"SCHEDULED",
        TASK_TYPE_SPECIAL:"SPECIAL",


        INTERVENTION_REGULAR: "REGULAR",
        INTERVENTION_SPECIAL: "SPECIAL",
        
        COMMENT_ORIGIN_CLIENT:"CLIENT",
        COMMENT_ORIGIN_GARDEN:"GARDEN",
        COMMENT_TYPE_TEXT:"TEXT",
        COMMENT_TYPE_MEDIA:"MEDIA",
        COMMENT_TYPE_ASK_FOR_APPROVAL:"AFAPPROVAL",
        COMMENT_TYPE_REJECTION:"REJECTION",
        COMMENT_TYPE_APPROVAL:"APPROVAL",

        EVENTS_EXCHANGE:"EVENTS_EXCHANGE",
        EVENTS_ERROR_EXCHANGE:"EVENTS_ERROR_EXCHANGE",

        EVT_COMMENT_APPROVED:"EVT_COMMENT_APPROVED",

        HTTP_HEADER_GARDENCENTERID:"gApp_gardenCenterId",
        HTTP_HEADER_USER:"gApp_UserId",

        CONTEXT_DEV:"CONTEXT_DEV",

        UPLOAD_FILE_FIELD_NAME:"fitxer",
        TEMP_FILE_STORAGE:"/Users/xavierbarrufet/Development/gAppMono/backEnd/0-public/"
    }
}();


module.exports = constants;