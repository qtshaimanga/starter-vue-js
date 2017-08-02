
namespace :letsencrypt do
    desc 'Restart apache conf'
    task :letsencrypt_conf do
        on roles(:app) do
            within release_path do
                execute :docker, :run, "-it --rm -p 80:80 --name certbot -v ", "/etc/letsencrypt:/etc/letsencrypt", "-v", "/var/lib/letsencrypt:/var/lib/letsencrypt", "certbot/certbot", :certonly
            end
        end
    end
end

namespace :letsencrypt do
    desc 'Restart apache conf'
    task :letsencrypt_renewal do
        on roles(:app) do
            within release_path do
                set :url, ask('url a renouveller : ', 'quentintshaimanga.fr')
                execute "/opt/letsencrypt/letsencrypt-auto --apache --renew-by-default -d", fetch(:url)
            end
        end
    end
end
