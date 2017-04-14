# config valid only for current version of Capistrano
lock '3.6.1'

set :application, 'starterVueJs'
set :repo_url, 'git@github.com:airEDF/starter-vue-js.git'

set :git_https_username, 'air-edf'
set :ssh_options, {:forward_agent => true, :keys => ['~/.ssh/id_rsa.pub']}
set :log_level, :debug

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
#set :linked_files, fetch(:linked_files, []).push('')

# Default value for linked_dirs is []
#set :linked_dirs, fetch(:linked_dirs, []).push('')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 3

namespace :deploy do

  after :updated, :vue_update do
      invoke "vue:vue_install"
      invoke "vue:vue_build"
      invoke "vue:vue_logs"
      invoke "vue:vue_premissions"
  end

  after :finished, "vue:restart_apache"

end
