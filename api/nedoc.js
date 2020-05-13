$(function() {
    var NEDOC_MODULES = JSON.parse('[["Builder", "orco.builder", true], ["BuilderProxy", "orco.builder", true], ["Job", "orco.job", true], ["JobSetup", "orco.jobsetup", true], ["JobState", "orco.job", true], ["Report", "orco.report", true], ["Runtime", "orco.runtime", true], ["_NoValue", "orco.job", true], ["__call__", "orco.builder.BuilderProxy", false], ["__enter__", "orco.runtime.Runtime", false], ["__eq__", "orco.builder.Builder", false], ["__exit__", "orco.runtime.Runtime", false], ["__hash__", "orco.builder.Builder", false], ["__init__", "orco.builder.Builder", false], ["__init__", "orco.builder.BuilderProxy", false], ["__init__", "orco.job.Job", false], ["__init__", "orco.jobsetup.JobSetup", false], ["__init__", "orco.report.Report", false], ["__init__", "orco.runtime.Runtime", false], ["__repr__", "orco.builder.Builder", false], ["__repr__", "orco.job.Job", false], ["__repr__", "orco.report.Report", false], ["_check_attached", "orco.job.Job", false], ["_check_stopped", "orco.runtime.Runtime", false], ["_check_type_all", "orco.cfggen", false], ["_check_unattached_job", "orco.runtime", false], ["_command_archive", "orco.cli", false], ["_command_compute", "orco.cli", false], ["_command_drop", "orco.cli", false], ["_command_drop_builder", "orco.cli", false], ["_command_free", "orco.cli", false], ["_command_serve", "orco.cli", false], ["_compute", "orco.runtime.Runtime", false], ["_create_args_from_config", "orco.builder.Builder", false], ["_create_config_from_args", "orco.builder.BuilderProxy", false], ["_create_job_setup", "orco.builder.Builder", false], ["_generic_kwargs_fn", "orco.builder", false], ["_get_global_builders", "orco.globals", false], ["_get_job_context", "orco.jobfunctions", false], ["_is_list_like", "orco.cfggen", false], ["_job_from_args", "orco.cli", false], ["_parse_args", "orco.cli", false], ["_register_builder", "orco.globals", false], ["_resolve", "orco.cfggen", false], ["_resolve_concat", "orco.cfggen", false], ["_resolve_product", "orco.cfggen", false], ["_resolve_range", "orco.cfggen", false], ["_resolve_ref", "orco.cfggen", false], ["_resolve_zip", "orco.cfggen", false], ["_run_computation", "orco.runtime.Runtime", false], ["_validate_name", "orco.jobfunctions", false], ["add_runner", "orco.runtime.Runtime", false], ["archive", "orco.globals", false], ["archive", "orco.runtime.Runtime", false], ["archive_many", "orco.globals", false], ["archive_many", "orco.runtime.Runtime", false], ["attach_bytes", "orco.jobfunctions", false], ["attach_directory", "orco.jobfunctions", false], ["attach_figure", "orco.ext.pyplot", false], ["attach_file", "orco.jobfunctions", false], ["attach_object", "orco.jobfunctions", false], ["attach_text", "orco.jobfunctions", false], ["build_config", "orco.cfggen", false], ["build_config_from_file", "orco.cfggen", false], ["builder", "orco", true], ["builder", "orco.globals", false], ["cfggen", "orco", true], ["clear_global_builders", "orco.globals", false], ["cli", "orco", true], ["compute", "orco.globals", false], ["compute", "orco.runtime.Runtime", false], ["compute_many", "orco.globals", false], ["compute_many", "orco.runtime.Runtime", false], ["consts", "orco", true], ["detach", "orco.job.Job", false], ["drop", "orco.globals", false], ["drop", "orco.runtime.Runtime", false], ["drop_builder", "orco.globals", false], ["drop_builder", "orco.runtime.Runtime", false], ["drop_many", "orco.globals", false], ["drop_many", "orco.runtime.Runtime", false], ["export_builder", "orco.ext.pandas", false], ["ext", "orco", true], ["extract_tar", "orco.job.Job", false], ["fn", "orco.builder.Builder", false], ["free", "orco.globals", false], ["free", "orco.runtime.Runtime", false], ["free_many", "orco.globals", false], ["free_many", "orco.runtime.Runtime", false], ["get_blob", "orco.job.Job", false], ["get_blob_as_file", "orco.job.Job", false], ["get_builder", "orco.runtime.Runtime", false], ["get_global_runtime", "orco.globals", false], ["get_names", "orco.job.Job", false], ["get_object", "orco.job.Job", false], ["get_state", "orco.runtime.Runtime", false], ["get_text", "orco.job.Job", false], ["globals", "orco", true], ["has_builder", "orco.runtime.Runtime", false], ["has_global_runtime", "orco.globals", false], ["insert", "orco.globals", false], ["insert", "orco.runtime.Runtime", false], ["is_attached", "orco.job.Job", false], ["job", "orco", true], ["job_from_config", "orco.builder.BuilderProxy", false], ["jobfunctions", "orco", true], ["jobsetup", "orco", true], ["make_proxy", "orco.builder.Builder", false], ["metadata", "orco.job.Job", false], ["pandas", "orco.ext", true], ["pyplot", "orco.ext", true], ["read", "orco.globals", false], ["read", "orco.runtime.Runtime", false], ["read_jobs", "orco.globals", false], ["read_jobs", "orco.runtime.Runtime", false], ["read_many", "orco.globals", false], ["read_many", "orco.runtime.Runtime", false], ["register_builder", "orco.runtime.Runtime", false], ["report", "orco", true], ["run_cli", "orco.cli", false], ["run_with_args", "orco.builder.Builder", false], ["run_with_config", "orco.builder.Builder", false], ["runtime", "orco", true], ["serve", "orco.globals", false], ["serve", "orco.runtime.Runtime", false], ["set_job_id", "orco.job.Job", false], ["start_executor", "orco.runtime.Runtime", false], ["start_runtime", "orco.globals", false], ["stop", "orco.runtime.Runtime", false], ["stop_executor", "orco.runtime.Runtime", false], ["stop_global_runtime", "orco.globals", false], ["to_dict", "orco.report.Report", false], ["try_read", "orco.globals", false], ["try_read", "orco.runtime.Runtime", false], ["unpack_frame", "orco.ext.pandas", false], ["upgrade_builder", "orco.globals", false], ["upgrade_builder", "orco.runtime.Runtime", false], ["value", "orco.job.Job", false]]');
    $("#search").autocomplete({
    source: NEDOC_MODULES.map(function(i) { return { label: i[0], desc: i[1], fulllink: i[2] }; }),
    select: function(event, ui) {
        if (ui.fulllink) {
            window.location.href = ui.item.desc + "." + ui.item.label + ".html";
        } else {
            window.location.href = ui.item.desc + ".html#" + ui.item.label;
        }
    },
    }).autocomplete("instance")._renderItem = function(ul, item) {
        return $("<li>")
            .append("<div><b>" + item.label + "</b><br>" + item.desc + "</div>")
            .appendTo(ul);
    };

    $(".fexpand").on("click", function(event) {
        event.preventDefault();
        var elem = $(this);
        var parent = elem.closest(".fn");
        parent.children(".fdetail").toggle(200);
    })

    if(window.location.hash) {
        var name = window.location.hash.slice(3); // remove #f_ prefix
        var elem = $("#fn_" + name);
        elem.toggle(0);
        elem.parent().parent().css("backgroundColor", "#e9f6ff");
    }
});
