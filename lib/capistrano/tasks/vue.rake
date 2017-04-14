namespace :vue do
  desc 'Installation des dépendances liées à Node'
  task :vue_install do
    on roles(:web) do
      within release_path do
        execute :sudo, :npm, :install
      end
    end
  end

  desc 'Build de App'
  task :vue_build do
    on roles(:web) do
      within release_path do
        execute :npm, :run, :build
      end
    end
  end

  desc 'Create logs folder'
  task :vue_logs do
    on roles(:web) do
      within release_path do
        execute :mkdir, "logs"
      end
    end
  end

  desc 'Update des permissions'
  task :vue_premissions do
    on roles(:web) do
      within release_path do
        sudo :chown,'-R', fetch(:server_user), 'node_modules/'
        sudo :chmod,'-R', '775', 'node_modules/'
        sudo :chown,'-R', fetch(:server_user), 'logs/'
        sudo :chmod,'-R', '775', 'logs/'
      end
    end
  end

  desc 'Restart Apache'
  task :restart_apache do
    on roles(:web) do
      sudo :service, :apache2, :restart
    end
  end

end
