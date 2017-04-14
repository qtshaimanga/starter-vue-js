namespace :apache  do

  desc "Création du fichier de conf apache2"
  task :conf do
    on roles(:web) do
      erb = File.read "lib/capistrano/templates/apache_conf.erb"
      set :server_name, ask('nom de domaine (without www) : ', 'developer.air-edf.io')
      set :server_admin, ask('email de admin : ', 'q.tshaimanga@gmail.com')
      set :config_name, ask('nom du fichier de configuration : ', 'developer.air-edf.conf')
      config_file = "/tmp/apache_#{fetch(:config_name)}"
      upload! StringIO.new(ERB.new(erb).result(binding)), config_file
      sudo :mv, config_file, "/etc/apache2/sites-available/#{fetch(:config_name)}"
      sudo :ln, '-fs', "/etc/apache2/sites-available/#{fetch(:config_name)}", "/etc/apache2/sites-enabled/#{fetch(:config_name)}"
      sudo :service, :apache2, :restart
      puts
    end
  end

  desc "Update du fichier conf ssl pour apache2"
  task :ssl do
    on roles(:web) do
      erb = File.read "lib/capistrano/templates/apache_ssl.erb"
      set :server_name, ask('nom de domaine (without www) : ', 'developer.air-edf.io')
      set :server_admin, ask('email de admin : ', 'q.tshaimanga@gmail.com')
      set :config_name, ask('nom du fichier de configuration : ', 'developer.air-edf-le-ssl.conf')
      config_file = "/tmp/apache_#{fetch(:config_name)}"
      upload! StringIO.new(ERB.new(erb).result(binding)), config_file
      sudo :mv, config_file, "/etc/apache2/sites-available/#{fetch(:config_name)}"
      sudo :service, :apache2, :restart
      puts
    end
  end

end
