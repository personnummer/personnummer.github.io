import Block, { BlockProps } from '../Block';

type Pkg = {
  name: string;
  branch: string;
  spec: string;
  maintainer: string;
  repo: string;
  workflow: string;
};

type ImplementationsProps = BlockProps & {
  pkgs: Pkg[];
};

const Implementations = (props: ImplementationsProps) => (
  <Block {...props}>
    <div className="overflow-auto lg:overflow-visible">
      <table className="lg:table-fixed w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 lowercase">Package</th>
            <th className="px-4 py-2 lowercase">Version</th>
            <th className="px-4 py-2 lowercase">Specification</th>
            <th className="px-4 py-2 lowercase">Status</th>
            <th className="px-4 py-2 lowercase">Maintainer</th>
          </tr>
        </thead>
        <tbody>
          {props.pkgs?.map((pkg) => (
            <tr key={pkg.repo}>
              <td className="border px-4 py-2">
                <a
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                  href={pkg.repo}
                >
                  {pkg.name}
                </a>
              </td>
              <td className="border px-4 py-2">
                <a
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                  href={pkg.repo}
                >
                  <img
                    src={`https://img.shields.io/github/v/release/personnummer/${pkg.repo
                      .split('/')
                      .pop()}?style=flat-square`}
                    alt="GitHub release (latest by date)"
                  />
                </a>
              </td>
              <td className="border px-4 py-2">
                <a
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                  href={`https://github.com/personnummer/meta/#package-specification-v${pkg.spec
                    .replace(/(\d).0/, '$1')
                    .replace('.', '')}`}
                >
                  <img
                    src={`https://img.shields.io/static/v1?label=spec&message=${pkg.spec}&color=blue&style=flat-square`}
                    alt="Specification version"
                  />
                </a>
              </td>
              <td className="border px-4 py-2">
                <a
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                  href={`${pkg.repo}/actions`}
                >
                  <img
                    src={`https://img.shields.io/github/actions/workflow/status/${pkg.repo
                      .split('/')
                      .slice(-2)
                      .join('/')}/${pkg.workflow}?branch=${
                      pkg.branch
                    }&style=flat-square`}
                    alt="GitHub Workflow Status"
                  />
                </a>
              </td>
              <td className="border px-4 py-2">
                <a
                  className="text-blue-500 hover:underline"
                  rel="noopener noreferrer"
                  href={`https://github.com/${pkg.maintainer.slice(1)}`}
                >
                  {pkg.maintainer}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Block>
);

export default Implementations;
