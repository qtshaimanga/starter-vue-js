namespace :docker do
    desc 'Restart apache conf'
    task :apache_restart do
        on roles(:app) do
            within release_path do
                set :container_name, ask('nom du container : ', 'service-apache')
                execute :docker , :exec, "-i", fetch(:container_name), "service", "apach2", "restart", "-d", release_path
            end
        end
    end
end
